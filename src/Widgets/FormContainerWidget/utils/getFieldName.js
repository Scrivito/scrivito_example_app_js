import { isCustomType } from "./isCustomType";

export function getFieldName(widget) {
  return isCustomType(widget)
    ? widget.get("customFieldName")
    : widget.get("type");
}
