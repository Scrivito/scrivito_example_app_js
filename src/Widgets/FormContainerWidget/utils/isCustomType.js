export function isCustomType(widget) {
  return !widget.attributeDefinitions().type || widget.get("type") === "custom";
}
