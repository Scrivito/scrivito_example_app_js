import md4 from "js-md4";

/** Generates a 20 long hex value, based the md4 of the given string */
export default async function contentHash(input) {
  return md4(input).substr(0, 20);
}
