import { hash as md5 } from "spark-md5";

/** Generates a 20 long hex value, based the md5 of the given string */
export default async function contentHash(input) {
  return md5(input).substr(0, 20);
}
