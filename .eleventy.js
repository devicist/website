module.exports = function (eleventyConfig) {
  // Static assets are copied as-is, not processed by Eleventy's template engine.
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/js");
  // Plain (non-Sass) CSS files that sit alongside style.scss - copied as-is.
  // style.scss itself is compiled separately by the `sass` CLI (see package.json).
  eleventyConfig.addPassthroughCopy("site/css/app.css");
  eleventyConfig.addPassthroughCopy("site/css/blanket.css");
  eleventyConfig.addPassthroughCopy("site/css/pet.css");
  // Files that should land at the site root (favicon, manifest, CNAME, etc.)
  eleventyConfig.addPassthroughCopy({ "site/static": "/" });

  // ~1.1GB of images/video under site/assets — avoid re-copying it on every
  // dev-server rebuild trigger.
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));

  return {
    dir: {
      input: "site",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md", "xml"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
