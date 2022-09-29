import { createBrowserHistory } from "history";
import { useHistory as scrivitoUseHistory } from "scrivito";
import { scrollToFragment } from "scroll-to-fragment";

export function configureHistory() {
  if (typeof window === "undefined") return;

  const history = createBrowserHistory();

  scrivitoUseHistory(history);

  scrollToFragment({ history });
}
