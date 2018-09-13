import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("<%= nameUpper %>", ({ <%= name %> }) => (
    <Scrivito.ContentTag tag="div" content={ <%= name %> } attribute="body" />
));