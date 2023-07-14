import * as Scrivito from "scrivito";
import { Rocket } from "./RocketDataClass";

Scrivito.provideEditingConfig(Rocket, {
  title: "Rocket",
  attributes: {
    name: { title: "Name" },
    description: { title: "Description" },
    country: { title: "Country" },
  },
});
