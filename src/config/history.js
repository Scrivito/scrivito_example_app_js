import { createBrowserHistory } from "history";
import { useHistory as scrivitoUseHistory } from "scrivito";
import { scrollToFragment } from "scroll-to-fragment";

const history = createBrowserHistory();

scrivitoUseHistory(history);

scrollToFragment({ history });
