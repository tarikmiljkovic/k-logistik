// const composePlugins = require('next-compose-plugins');
// const mdxEnhanced = require("next-mdx-enhanced");


// module.exports = composePlugins([
//   mdxEnhanced({layoutPath: './templates'})
// ]);
const withImages = require("next-images");
const composePlugins = require("next-compose-plugins");
const mdxEnhanced = require("next-mdx-enhanced");

module.exports = composePlugins([
  [
  mdxEnhanced({
    layoutPath: "./src/templates",
  }),
  ],
  withImages()
]);
