import * as React from "react";
import * as Scrivito from "scrivito";
import ContentProperty from "../../Components/ScrivitoExtensions/ContentProperty";
import { neoletterInstance } from "./utils/neoletterInstance";

const FormIdComponent = Scrivito.connect(({ widget }) => (
  <div className="scrivito_detail_content">
    <div className="attribute_form_id_item">
      <ContentProperty
        content={widget}
        attribute="formId"
        title="Form ID"
        description="This ID identifies the form in Neoletter."
      />

      {neoletterInstance() && widget.get("formId") && (
        <a
          className="scrivito_button scrivito_blue"
          href={`https://neoletter.com/i/${neoletterInstance()}/forms/${widget.get(
            "formId"
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Register form or view submissions
        </a>
      )}
    </div>
  </div>
));

export default FormIdComponent;
