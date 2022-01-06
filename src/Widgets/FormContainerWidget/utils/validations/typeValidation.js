import { isCustomType } from "../isCustomType";
import { isFieldNameUnique } from "../isFieldNameUnique";

export const typeValidation = [
  "type",
  (type, { widget }) => {
    if (!type) {
      return "Select the input type.";
    }

    if (!isCustomType(type) && !isFieldNameUnique(widget)) {
      return "There is at least one other element with the same input type.";
    }
  },
];
