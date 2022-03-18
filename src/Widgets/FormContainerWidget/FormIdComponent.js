import * as React from "react";
import * as Scrivito from "scrivito";
import ContentProperty from "../../Components/ScrivitoExtensions/ContentProperty";

const FormIdComponent = Scrivito.connect(({ widget }) => {
  const formSubmissionsHref = widget.get("formId")
    ? `https://neoletter.com/i/${
        process.env.SCRIVITO_TENANT
      }/forms/${widget.get("formId")}`
    : null;

  return (
    <div className="scrivito_detail_content">
      <div className="attribute_form_id_item">
        <ContentProperty
          content={widget}
          attribute="formId"
          title="Form ID"
          description="This ID identifies the form in Neoletter."
        />

        <a
          className={`scrivito_button ${
            formSubmissionsHref ? "scrivito_blue" : "scrivito_disabled"
          }`}
          href={formSubmissionsHref}
          target="_blank"
          rel="noreferrer"
        >
          View submissions
        </a>
      </div>
    </div>
  );
});

export default FormIdComponent;
