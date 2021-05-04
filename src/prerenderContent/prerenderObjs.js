import * as Scrivito from "scrivito";
import { chunk } from "lodash-es";
import prerenderObj from "./prerenderObj";
import { reportError } from "./reportError";
import { storeResult } from "./storeResult";

export default async function prerenderObjs(
  targetDir,
  objClassesBlacklist,
  assetManifest
) {
  console.time("[prerenderObjs]");

  console.time("Loading all objs");
  const objs = await Scrivito.load(() => allObjs(objClassesBlacklist));
  console.timeEnd("Loading all objs");
  console.log(`Loaded ${objs.length} objs`);

  let failedCount = 0;
  const files = [];
  const storeFile = async (file) => {
    const storedFile = await storeResult(targetDir, file);
    if (storedFile) {
      files.push(storedFile);
    }
  };

  const objsGroups = chunk(objs, 10);
  await asyncForEachSequential(objsGroups, async (objsGroup) =>
    asyncForEach(objsGroup, async (obj) => {
      try {
        const prerenderedFiles = await prerenderObj(obj, assetManifest);
        await asyncForEachSequential(prerenderedFiles, storeFile);
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

  return files;
}

function allObjs(objClassesBlacklist) {
  return Scrivito.Obj.onSite("default")
    .all()
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
