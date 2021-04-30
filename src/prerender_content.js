import path from "path";
import fse from "fs-extra";
import "./Objs";
import "./Widgets";
import { configure } from "./config";
import prerenderObjs from "./prerenderContent/prerenderObjs";
import prerenderSitemap from "./prerenderContent/prerenderSitemap";
import { extendRedirects } from "./prerenderContent/extendRedirects";
import { reportError } from "./prerenderContent/reportError";
import { storeResult } from "./prerenderContent/storeResult";

configure({ priority: "background" });

const PRERENDER_OBJ_CLASSES_BLACKLIST = [
  "Download",
  "Image",
  "Redirect",
  "Video",
];

const SITEMAP_OBJ_CLASSES_WHITELIST = [
  "Author",
  "Blog",
  "BlogPost",
  "Event",
  "Homepage",
  "Job",
  "LandingPage",
  "Page",
];

const SOURCE_DIR = "build";
const TARGET_DIR = "buildPrerendered";

async function prerenderContent() {
  console.time("[prerenderContent]");

  if (!process.env.SCRIVITO_ORIGIN) {
    throw new Error(
      'The environment variable "SCRIVITO_ORIGIN" is not defined.' +
        " Prerendered pages need a configured origin or base URL."
    );
  }

  const assetManifest = await fse.readJson(
    path.join(SOURCE_DIR, "asset-manifest.json")
  );

  console.log(`Removing ${TARGET_DIR}/`);
  await fse.remove(TARGET_DIR);

  console.log(`Copying ${SOURCE_DIR}/ to ${TARGET_DIR}/`);
  await fse.copy(SOURCE_DIR, TARGET_DIR);

  await fse.remove(path.join(TARGET_DIR, "asset-manifest.json"));

  const storedFiles = [];
  const storeFile = (file) => storeResult(TARGET_DIR, storedFiles, file);

  await prerenderSitemap(SITEMAP_OBJ_CLASSES_WHITELIST, storeFile);

  await prerenderObjs(
    PRERENDER_OBJ_CLASSES_BLACKLIST,
    storeFile,
    reportError,
    assetManifest
  );

  await extendRedirects(TARGET_DIR, storedFiles, SOURCE_DIR);

  console.log(`📦 Added ${storedFiles.length} files to ${TARGET_DIR}!`);

  console.timeEnd("[prerenderContent]");
}

prerenderContent().catch((e) => {
  reportError("An error occurred!", e);
  process.exitCode = 1;
});
