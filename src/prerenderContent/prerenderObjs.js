/* eslint no-console: "off" */
import * as Scrivito from "scrivito";
import filenameFromUrl from "./filenameFromUrl";
import prerenderObj from "./prerenderObj";

export default async function prerenderObjs(objClassesBlacklist) {
  console.time("[prerenderObjs]");

  console.time("Loading all objs");
  const objs = await Scrivito.load(() => allObjs(objClassesBlacklist));
  console.timeEnd("Loading all objs");
  console.log(`Loaded ${objs.length} objs`);

  let failedCount = 0;

  const prerenderedObjs = await Promise.all(
    objs.map(async obj => {
      try {
        const prerenderedObj = await prerenderObj(obj);
        const filename = filenameFromUrl(Scrivito.urlFor(obj));
        console.log(`Exported "${filename}" (${obj.id()})"`);
        return prerenderedObj;
      } catch (e) {
        failedCount += 1;
        console.log(
          `❌  Error while processing obj ${obj.id()}. Skipping file.`,
          e,
          e.message
        );
        return new Promise(resolve => resolve([]));
      }
    })
  );

  const results = prerenderedObjs.flat();
  console.log(
    `Exporting ${
      results.length
    } files (skipped ${failedCount} objs due to failures)`
  );
  console.timeEnd("[prerenderObjs]");
  return results;
}

function allObjs(objClassesBlacklist) {
  return [
    ...Scrivito.Obj.all().andNot("_objClass", "equals", objClassesBlacklist),
  ];
}
