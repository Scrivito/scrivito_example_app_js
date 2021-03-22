import { configureScrivito } from "./scrivito";
import { configureHistory } from "./history";
import { configureObjClassForContentType } from "./objClassForContentType";
import { configureScrivitoContentBrowser } from "./scrivitoContentBrowser";
import { configureWindowScrivito } from "./windowScrivito";

export function configure() {
  configureScrivito();
  configureHistory();
  configureScrivitoContentBrowser();
  configureObjClassForContentType();
  configureWindowScrivito();
}
