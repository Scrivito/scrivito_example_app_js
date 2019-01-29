/* eslint no-console: "off" */
import * as Scrivito from "scrivito";
import { chunk } from "lodash-es";
import prerenderObj from "./prerenderObj";

export default async function prerenderObjs(
  objClassesBlacklist,
  storeResult,
  reportError
) {
  console.time("[prerenderObjs]");

  console.time("Loading all objs");
  const objs = await Scrivito.load(() => allObjs(objClassesBlacklist));
  console.timeEnd("Loading all objs");
  console.log(`Loaded ${objs.length} objs`);

  let failedCount = 0;

  const objsGroups = chunk(objs, 10);
  await asyncForEachSequential(objsGroups, async objsGroup =>
    asyncForEach(objsGroup, async obj => {
      try {
        const prerenderedFiles = await prerenderObj(obj);
        await asyncForEach(prerenderedFiles, storeResult);
      } catch (e) {
        failedCount += 1;
        const pageId = obj.id();
        const pageUrl = Scrivito.urlFor(obj);
        reportError(
          `Error while processing obj ${pageId} (${pageUrl}). Skipping file.`,
          e.message,
          e
        );
      }
    })
  );

  console.timeEnd("[prerenderObjs]");
  if (failedCount) {
    reportError(`Skipped ${failedCount} objs due to failures.`);
  }
}

function allObjs(objClassesBlacklist) {
  return Scrivito.Obj.all()
    .andNot("_objClass", "equals", objClassesBlacklist)
    .take();
}

async function asyncForEach(items, fn) {
  return Promise.all(items.map(fn));
}

async function asyncForEachSequential(items, fn) {
  return items.reduce(async (promise, item) => {
    await promise;
    return fn(item);
  }, true);
}
