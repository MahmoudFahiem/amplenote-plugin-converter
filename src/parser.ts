import { parse } from "acorn";
import { readFileSync } from "fs";

export const parseJsFile = (filePath: string) => {
  const parsedJSFile = readFileSync(filePath, "utf-8").toString();
  return parse(parsedJSFile, {
    ecmaVersion: 6,
  });
};
