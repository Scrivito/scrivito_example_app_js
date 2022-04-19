import * as React from "react";

export function WrapIfClassName({ className, children }) {
  return className ? <div className={className}>{children}</div> : children;
}
