import { getFormContainer } from "../utils/getFormContainer";

export function insideFormContainerValidation(widget) {
  if (!getFormContainer(widget)) {
    return "Needs to be inside a form.";
  }
}
