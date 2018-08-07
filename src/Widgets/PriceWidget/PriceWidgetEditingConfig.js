import * as Scrivito from "scrivito";
import priceWidgetIcon from "../../assets/images/price_widget.svg";

Scrivito.provideEditingConfig("PriceWidget", {
  title: "Price",
  thumbnail: priceWidgetIcon,
  initialContent: {
    currency: "$",
    price: "20",
    period: "/mo",
  },
});
