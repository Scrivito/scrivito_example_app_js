import * as React from "react";
import * as Scrivito from "scrivito";
import { getFieldName } from "./utils/getFieldName";
import { scrollIntoView } from "./utils/scrollIntoView";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => {
  const formEndpoint = `https://api.justrelate.com/neoletter/instances/${process.env.SCRIVITO_TENANT}/form_submissions`;

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
        {widget.get("hiddenFields").map((hiddenField) => (
          <HiddenField key={hiddenField.id()} widget={hiddenField} />
        ))}
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

const HiddenField = Scrivito.connect(({ widget }) => {
  const name = getFieldName(widget);
  if (!name) {
    return null;
  }

  return <input type="hidden" name={name} value={widget.get("hiddenValue")} />;
});
