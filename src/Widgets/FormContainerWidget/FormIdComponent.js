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

      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => {
          Scrivito.load(
            () =>
              `https://neoletter.com/i/${neoletterInstance()}/forms/${widget.get(
                "formId"
              )}`
          ).then((url) => window.open(url, "_blank"));
        }}
      >
        Register form or view submissions
      </button>
    </div>
  </div>
));

export default FormIdComponent;
