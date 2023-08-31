import * as React from "react";
import * as Scrivito from "scrivito";
import { scrollIntoView } from "./utils/scrollIntoView";
import { getHistory } from "../../config/history";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => {
  const formEndpoint = `https://api.justrelate.com/neoletter/instances/${process.env.SCRIVITO_TENANT}/form_submissions`;

  const [browserLocation, setBrowserLocation] = React.useState(null);
  React.useEffect(() => {
    const history = getHistory();
    if (!history) return;
    setBrowserLocation(locationToUrl(history.location));

    return history.listen(({ location }) =>
      setBrowserLocation(locationToUrl(location))
    );
  }, []);

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successfullySent, setSuccessfullySent] = React.useState(false);
  const [submissionFailed, setSubmissionFailed] = React.useState(false);

  if (isSubmitting) {
    return (
      <div className="form-container-widget text-center">
        <i className="fa fa-spin fa-spinner fa-2x" aria-hidden="true"></i>{" "}
        <span className="text-super">{widget.get("submittingMessage")}</span>
      </div>
    );
  }

  if (successfullySent) {
    return (
      <div className="form-container-widget text-center">
        <i className="fa fa-check fa-2x" aria-hidden="true"></i>{" "}
        <span className="text-super">{widget.get("submittedMessage")}</span>
      </div>
    );
  }

  if (submissionFailed) {
    return (
      <div className="form-container-widget text-center">
        <i className="fa fa-exclamation-triangle fa-2x" aria-hidden="true"></i>{" "}
        <span className="text-super">{widget.get("failedMessage")}</span>
      </div>
    );
  }

  return (
    <div className="form-container-widget">
      <form method="post" action={formEndpoint} onSubmit={onSubmit}>
        <input type="hidden" name="form_id" value={widget.get("formId")} />
        <input
          type="hidden"
          name="url"
          value={browserLocation || Scrivito.urlFor(widget.obj())}
        />
        <Scrivito.InPlaceEditingOff>
          <Scrivito.ContentTag content={widget} attribute="hiddenFields" />
        </Scrivito.InPlaceEditingOff>

        <HoneypotField />

        <Scrivito.ContentTag content={widget} attribute="content" />
      </form>
    </div>
  );

  async function onSubmit(element) {
    element.preventDefault();

    scrollIntoView(element.target);

    indicateProgress();
    try {
      await submit(element.target, formEndpoint);
      indicateSuccess();
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);

      indicateFailure();
    }
  }

  function indicateProgress() {
    setIsSubmitting(true);
    setSuccessfullySent(false);
    setSubmissionFailed(false);
  }

  function indicateSuccess() {
    setIsSubmitting(false);
    setSuccessfullySent(true);
    setSubmissionFailed(false);
  }

  function indicateFailure() {
    setIsSubmitting(false);
    setSuccessfullySent(false);
    setSubmissionFailed(true);
  }
});

async function submit(formElement, formEndpoint) {
  const body = new URLSearchParams(new FormData(formElement));
  // console.log("submitting", Object.fromEntries(body.entries()));
  const response = await fetch(formEndpoint, { method: "post", body });
  if (!response.ok) {
    throw new Error(
      `Response was not successful. Status code: ${response.status}.`
    );
  }
}

const HoneypotField = () => (
  <div aria-hidden="true" className="winnie-the-pooh">
    <input autoComplete="off" role="presentation" name="fax" tabIndex="-1" />
  </div>
);

function locationToUrl(location) {
  return `${window.location.origin}${location.pathname}${location.search}`;
}
