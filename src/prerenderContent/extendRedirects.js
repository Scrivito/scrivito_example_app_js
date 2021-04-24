import fse from "fs-extra";

// Netlify does normalize urls automatically.
// An Url, that contains upper case characters is automatically converted to lower case.
// But Scrivito is case-sensitive for routing and will no longer recognize the lower cased route.
// By explicitly adding the uppercase url to "_redirects" netlify will not longer normalize the Url.
export async function extendRedirects(targetDir, prerenderedFiles, sourceDir) {
  const explicitRedirects = prerenderedFiles
    .filter((f) => f.endsWith(".html") && f.toLowerCase() !== f)
    .map((file) => `${file.substring(0, file.length - 5)} ${file} 200`);
  const sourceRedirects = await fse.readFile(`${sourceDir}/_redirects`, "utf8");
  const placeholder = "# PRERENDERED-UPPERCASE-ROUTES-PLACEHOLDER";
  if (sourceRedirects.indexOf(placeholder) === -1) {
    throw new Error(
      `The following placeholder is missing in _redirects:
      ${placeholder}`
    );
  }
  const extendedRedirects = sourceRedirects.replace(
    placeholder,
    explicitRedirects.join("\n")
  );
  const target = `${targetDir}/_redirects`;
  await fse.writeFile(target, extendedRedirects, "utf8");
  console.log(
    `  📦 [extendRedirects] Extended ${target} with ${explicitRedirects.length} entries.`
  );
}
