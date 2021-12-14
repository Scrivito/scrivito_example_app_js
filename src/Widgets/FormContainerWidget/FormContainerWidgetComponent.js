import * as React from "react";
import * as Scrivito from "scrivito";
import { neoletterInstance } from "./utils/neoletterInstance";
import { scrollIntoView } from "./scrollIntoView";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => {
  // TODO: Adjust final API endpoint, once available
  const formEndpoint = neoletterInstance()
    ? `https://dxhub-neoletter-api.justrelate.io/instances/${neoletterInstance()}/rest/form_submissions`
    : "";

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
        <Scrivito.ContentTag content={widget} attribute="content" />
      </form>
    </div>
  );

  async function onSubmit(element) {
    element.preventDefault();
    if (!formEndpoint) {
      return;
    }

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
  await fetch(formEndpoint, { method: "post", body });
}
