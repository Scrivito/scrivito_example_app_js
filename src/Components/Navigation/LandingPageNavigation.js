import * as React from "react";
import { Logo } from "./Logo";

export function LandingPageNavigation({ navigationStyle }) {
  return (
    <div className="nav-landing-page">
      <Logo scrolled={false} navigationStyle={navigationStyle} />
    </div>
  );
}
