import { Command } from "commander";
import path from "path";
import { convert as convertCommand } from "./commands/convert";

const srcPath = path.join(__dirname, "src");

const JS_FILE_PATH = path.join(srcPath, "input", "bundle.js");

const main = () => {
  const program = new Command();

  program
    .name("amplenote-plugin-converter")
    .description(
      "Converts a JS file into Amplenote plugin API object structure."
    )
    .version("1.0.0");

  program
    .command("convert")
    .description(
      "Converts a JS file into Amplenote plugin API object structure."
    )
    .argument("<filePath>", "JS file path to convert.")
    .argument("<outputDir>", "Output file path.")
    .action(convertCommand);

  program.parse();
};

// convert '/Users/mahmoudfahiem/Areas/Software-Engineering/1.Projects/Amplenote_Plugin_Converter/amplenote-plugin-converter/input/bundle.js'
// /Users/mahmoudfahiem/Areas/Software-Engineering/1.Projects/Amplenote_Plugin_Converter/amplenote-plugin-converter/output

if (require.main == module) main();
