import { isCustomType } from "../isCustomType";
import { isFieldNameUnique } from "../isFieldNameUnique";

export const typeValidation = [
  "type",
  (type, { widget }) => {
    if (!type) {
      return "Select the input type.";
    }

    if (!isCustomType(widget) && !isFieldNameUnique(widget)) {
      return `There must be only one element with the input type “${type.replace(
        /_/,
        " "
      )}”.`;
    }
  },
];
