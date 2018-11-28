/* eslint no-console: "off" */
import * as Scrivito from "scrivito";
import prerenderObj from "./prerenderObj";

export default async function prerenderObjs(objClassesBlacklist, storeResult) {
  console.time("[prerenderObjs]");

  console.time("Loading all objs");
  const objs = await Scrivito.load(() => allObjs(objClassesBlacklist));
  console.timeEnd("Loading all objs");
  console.log(`Loaded ${objs.length} objs`);

  let failedCount = 0;

  await Promise.all(
    objs.map(async obj => {
      try {
        const prerenderedFiles = await prerenderObj(obj);
        await Promise.all(prerenderedFiles.map(storeResult));
      } catch (e) {
        failedCount += 1;
        console.log(
          `❌  Error while processing obj ${obj.id()}. Skipping file.`,
          e,
          e.message
        );
      }
    })
  );

  if (failedCount) {
    console.log(`❌  Skipped ${failedCount} objs due to failures.`);
  }

  console.timeEnd("[prerenderObjs]");
}

function allObjs(objClassesBlacklist) {
  return [
    ...Scrivito.Obj.all().andNot("_objClass", "equals", objClassesBlacklist),
  ];
}
