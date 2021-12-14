export function getFieldName(widget) {
  const type = widget.get("type");
  const customFieldName = widget.get("customFieldName");

  return type?.startsWith("custom") ? customFieldName : type;
}
