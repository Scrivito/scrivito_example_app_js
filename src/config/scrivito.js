import * as Scrivito from "scrivito";

const config = { tenant: process.env.SCRIVITO_TENANT };

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

Scrivito.configure(config);
