import { createBrowserHistory } from "history";
import { useHistory as scrivitoUseHistory } from "scrivito";
import { scrollToFragment } from "scroll-to-fragment";

export function configureHistory() {
  const history = getHistory();
  if (!history) return;

  scrivitoUseHistory(history);

  scrollToFragment({ history });
}

let currentHistory;

export function getHistory() {
  if (typeof window === "undefined") return;

  if (!currentHistory) currentHistory = createBrowserHistory();
  return currentHistory;
}
