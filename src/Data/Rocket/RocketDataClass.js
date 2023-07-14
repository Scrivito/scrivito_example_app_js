import * as Scrivito from "scrivito";

export const Rocket = Scrivito.provideDataClass("Rocket", {
  connection: {
    get: async () => null,
    index: async () => {
      const response = await fetch("https://api.spacexdata.com/v4/rockets");
      const json = await response.json();

      const results = json.map((data) => ({ _id: data.id, ...data }));

      return { results };
    },
  },
});
