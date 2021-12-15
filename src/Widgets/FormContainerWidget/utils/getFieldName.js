export function getFieldName(widget) {
  const type = widget.get("type");

  return ["custom", "custom_text", "custom_textarea"].includes(type)
    ? widget.get("customFieldName")
    : type;
}
