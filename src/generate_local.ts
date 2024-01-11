// generate.ts
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import svgrConfig from "../svgr.config";
import { createIndex, toPascalCase } from "./utils";
import svgr from "@svgr/core";

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, "./icons/components");
const SVG_DIRECTORY_PATH = path.resolve(__dirname, "./icons/svgs");
const INDEX_DIRECTORY_PATH = path.resolve(__dirname, "./icons");

try {
  const convert = async () => {
    // 4. Read manually added SVGs data
    console.log(chalk.blueBright("-> Reading manually added SVGs"));
    let manuallyAddedSvgs: { data: string; name: string }[] = [];
    const svgFiles = fs
      .readdirSync(SVG_DIRECTORY_PATH)
      // Filter out hidden files (e.g. .DS_STORE)
      .filter((item) => !/(^|\/)\.[^/.]/g.test(item));
    svgFiles.forEach((fileName) => {
      const svgData = fs.readFileSync(
        path.resolve(SVG_DIRECTORY_PATH, fileName),
        "utf-8"
      );
      manuallyAddedSvgs.push({
        data: svgData,
        name: toPascalCase(fileName.replace(/svg/i, "")),
      });
    });
    const allSVGs = [...manuallyAddedSvgs];

    // 5. Convert SVG to React Components
    console.log(chalk.cyanBright("-> Converting to React components"));
    allSVGs.forEach((svg) => {
      const svgCode = svg.data;
      const componentName = toPascalCase(svg.name) + "Icon";
      const componentFileName = `${componentName}.tsx`;

      // Converts SVG code into React code using SVGR library
      const componentCode = svgr.transform.sync(svgCode, svgrConfig, {
        componentName,
      });

      // 6. Write generated component to file system
      fs.ensureDirSync(ICONS_DIRECTORY_PATH);
      fs.outputFileSync(
        path.resolve(ICONS_DIRECTORY_PATH, componentFileName),
        componentCode
      );
    });

    // 7. Generate index.ts
    console.log(chalk.yellowBright("-> Generating index file"));
    createIndex({
      componentsDirectoryPath: ICONS_DIRECTORY_PATH,
      indexDirectoryPath: INDEX_DIRECTORY_PATH,
      indexFileName: "index.tsx",
    });

    console.log(chalk.greenBright("-> All done! ✅"));
  };
  convert();
} catch (err: unknown) {
  console.error(err);
  process.exit(1);
}
