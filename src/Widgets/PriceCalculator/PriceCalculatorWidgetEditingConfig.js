import * as Scrivito from "scrivito";
import priceWidgetIcon from "../../assets/images/price_calculator_widget.svg";

Scrivito.provideEditingConfig("PriceCalculatorWidget", {
  title: "Price Calculator",
  thumbnail: priceWidgetIcon,
  attributes: {
    headerTitle: {
      title: "Heading Title",
      description: "Heading Title",
    },
    headerDesc: {
      title: "Heading Description",
      description: "Heading Description",
    },
  },
  properties: [ "headerTitle", "headerDesc" ],
  initialContent: {
    headerTitle: "Test din pris",
    headerDesc: "Er du nysgerrig efter, hvad du skulle have betalt hos Barry i forhold til et andet elselskab? Vi har samlet oplysningerne og gjort det nemt at sammenligne din historiske elpris med den pris, du ville have betalt hos Barry."
  },
});
