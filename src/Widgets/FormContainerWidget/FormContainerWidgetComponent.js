import * as React from "react";
import * as Scrivito from "scrivito";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => {
  const [submission, setSubmission] = React.useState("not submitted");

  if (submission === "submitting") {
    return (
      <div className="form-container-widget text-center">
        <i className="fa fa-spin fa-spinner fa-2x" aria-hidden="true"></i>{" "}
        <span className="text-super">{widget.get("submittingMessage")}</span>
      </div>
    );
  }

  if (submission === "success") {
    return (
      <div className="form-container-widget text-center">
        <i className="fa fa-check fa-2x" aria-hidden="true"></i>{" "}
        <span className="text-super">{widget.get("submittedMessage")}</span>
      </div>
    );
  }

  return (
    <div className="form-container-widget">
      <form method="post" onSubmit={onSubmit}>
        <input type="hidden" name="form_id" value={widget.get("formId")} />
        <Scrivito.ContentTag content={widget} attribute="content" />
      </form>
    </div>
  );

  async function onSubmit(element) {
    element.preventDefault();
    element.target.scrollIntoView({ behavior: "smooth" });

    setSubmission("submitting");
    await submit(element.target);
    setSubmission("success");
  }
});

async function submit(formElement) {
  const formData = new FormData(formElement);
  const formProps = Object.fromEntries(formData);

  // TODO: Implement actual submission
  console.log("submitting", formProps);
  return new Promise((resolve) => setTimeout(resolve, 3000));
}
