const componentTemplate = require("./src/templates/defaultTemplate.js");

module.exports = {
  typescript: true,
  icon: false,
  dimensions: false,
  titleProp: true,
  plugins: [
    // Clean SVG files using SVGO
    "@svgr/plugin-svgo",
    // Generate JSX
    "@svgr/plugin-jsx",
    // Format the result using Prettier
    "@svgr/plugin-prettier",
  ],
  replaceAttrValues: {
    black: "currentColor",
    "#000": "currentColor",
    "#000000": "currentColor",
  },
  svgoConfig: {
    plugins: [
      "sortAttrs",
      "removeScriptElement",
      "removeDimensions",
      {
        name: "removeAttrs",
        params: {
          attrs: ["path:stroke-width"],
        },
      },
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [
            {
              "stroke-width": 1.2,
            },
            {
              stroke: "currentColor",
            },
            {
              "aria-hidden": true,
            },
          ],
        },
      },
    ],
  },
  template: componentTemplate,
};
