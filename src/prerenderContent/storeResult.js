import filesize from "filesize";
import fse from "fs-extra";
import path from "path";

import { reportError } from "./reportError";

export async function storeResult(targetDir, { filename, content }) {
  const filePath = path.join(targetDir, filename);
  if (!path.normalize(filePath).startsWith(`${targetDir}`)) {
    reportError(`filename "${filename}" is invalid! Skipping file...`);
    return;
  }
  console.log(
    `  📥 [storeResult] Storing "${filename}" (file size: ${filesize(
      content.length
    )})...`
  );
  try {
    await fse.outputFile(filePath, content, { flag: "wx" });
    return filePath.substring(targetDir.length);
  } catch (e) {
    if (e.code === "EEXIST") {
      reportError(
        `Filename "${filename}" already exists in ${targetDir}! Skipping file...`
      );
    } else {
      throw e;
    }
  }
}
