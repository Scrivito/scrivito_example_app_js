export function isCustomType(widget) {
  return ["custom", "custom_text", "custom_textarea"].includes(
    widget.get("type")
  );
}
