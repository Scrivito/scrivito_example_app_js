import { createBrowserHistory } from "history";
import * as Scrivito from "scrivito";
import { scrollToFragment } from "scroll-to-fragment";

const history = createBrowserHistory();

Scrivito.useHistory(history);

scrollToFragment({ history });
