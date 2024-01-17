import { simple } from "acorn-walk";
import { parseJsFile } from "../parser";

/**
 *
 * @param filePath {string} The path to the js file.
 * @param outputDir {string} The directory of the generated file.
 */
export const convert = (filePath: string, outputDir: string) => {
  const parsedJS = parseJsFile(filePath);
  simple(parsedJS, {
    ArrowFunctionExpression(node) {
      console.log(
        "🚀 ~ file: convert.ts:13 ~ ArrowFunctionExpression ~ node:",
        node
      );
    },
  });
};
