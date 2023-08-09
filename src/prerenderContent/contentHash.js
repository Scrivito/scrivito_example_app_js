import { md4 } from "hash-wasm";

/** Generates a 20 long hex value, based the md4 of the given string */
export async function contentHash(input) {
  const md4OfInput = await md4(input);
  return md4OfInput.substring(0, 20);
}
