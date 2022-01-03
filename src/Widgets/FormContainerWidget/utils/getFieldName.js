import { isCustomType } from "./isCustomType";

export function getFieldName(widget) {
  const type = widget.get("type");

  return isCustomType(type) ? widget.get("customFieldName") : type;
}
