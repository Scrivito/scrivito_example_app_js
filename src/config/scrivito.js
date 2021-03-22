import * as Scrivito from "scrivito";

const config = { tenant: process.env.SCRIVITO_TENANT, adoptUi: true };

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

if (process.env.SCRIVITO_ENDPOINT) {
  config.endpoint = process.env.SCRIVITO_ENDPOINT;
}

export function configureScrivito(options) {
  const scrivitoConfig = { ...config };
  if (options?.useScrivitoBackgroundPriority) {
    scrivitoConfig.priority = "background";
  }
  Scrivito.configure(scrivitoConfig);
}
