import { configureScrivito } from "./scrivito";
import { configureHistory } from "./history";
import { configureObjClassForContentType } from "./objClassForContentType";
import { configureScrivitoContentBrowser } from "./scrivitoContentBrowser";
import { configureWindowScrivito } from "./windowScrivito";

export function configure(options) {
  configureScrivito(options);
  configureObjClassForContentType();

  configureScrivitoContentBrowser();
  configureHistory();
  configureWindowScrivito();
}
