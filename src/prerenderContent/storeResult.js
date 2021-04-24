const filesize = require("filesize");
const fse = require("fs-extra");
const path = require("path");

const { reportError } = require("./reportError");

exports.storeResult = async function storeResult(
  targetDir,
  storedFiles,
  { filename, content }
) {
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
    storedFiles.push(filePath.substring(targetDir.length));
  } catch (e) {
    if (e.code === "EEXIST") {
      reportError(
        `Filename "${filename}" already exists in ${targetDir}! Skipping file...`
      );
    } else {
      throw e;
    }
  }
};
