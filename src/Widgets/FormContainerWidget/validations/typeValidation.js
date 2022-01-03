import { isCustomType } from "../utils/isCustomType";
import { isFieldNameUnique } from "../utils/isFieldNameUnique";

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
