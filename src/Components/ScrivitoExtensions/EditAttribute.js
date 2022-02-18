import * as React from "react";
import * as Scrivito from "scrivito";

const EditAttribute = Scrivito.connect(
  ({ content, attribute, title, description }) => {
    const validationResults = Scrivito.validationResultsFor(content, attribute);
    const highestSeverity = findHighestSeverity(validationResults);
    const severityClass = highestSeverity && `scrivito_${highestSeverity}`;

    return (
      <>
        <div className={`scrivito_detail_label ${severityClass}`}>
          {severityClass && (
            <i className="scrivito_icon scrivito_icon_error"></i>
          )}
          <span>{title}</span>
        </div>
        <Scrivito.ContentTag
          content={content}
          attribute={attribute}
          className={`input ${severityClass}`}
        />
        <div>
          {validationResults.map((v) => (
            <div
              key={`${v.severity}${v.message}`}
              className={`scrivito_validation_notice scrivito_${v.severity}`}
            >
              <span className="scrivito_validation_message">{v.message}</span>
            </div>
          ))}
        </div>
        {description && (
          <div className="scrivito_notice_body">{description}</div>
        )}
      </>
    );
  }
);

export default EditAttribute;

function findHighestSeverity(validationResults) {
  const highestSeverityValidation =
    validationResults.find((v) => v.severity === "error") ||
    validationResults.find((v) => v.severity === "warning") ||
    validationResults.find((v) => v.severity === "info");
  return highestSeverityValidation?.severity;
}
