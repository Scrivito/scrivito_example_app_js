export function alignmentClassName(widgetAlignment) {
  if (widgetAlignment === "center") return "text-center";
  if (widgetAlignment === "right") return "text-end";

  return null;
}
