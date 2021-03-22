import { createBrowserHistory } from "history";
import { useHistory as scrivitoUseHistory } from "scrivito";
import { scrollToFragment } from "scroll-to-fragment";

export function configureHistory() {
  const history = createBrowserHistory();

  scrivitoUseHistory(history);

  scrollToFragment({ history });
}
