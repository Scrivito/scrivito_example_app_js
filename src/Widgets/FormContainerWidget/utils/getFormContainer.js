/** Returns the first `FormContainerWidget` container it can find. `null` otherwise. */
export function getFormContainer(childWidget) {
  let candidate = childWidget.container();
  do {
    if (candidate.objClass() === "FormContainerWidget") {
      return candidate;
    }
    candidate = candidate.container();
  } while (candidate.container);

  return null;
}
