const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {

    // Watch Targets
    eleventyConfig.addWatchTarget("src/assets/sass");
    eleventyConfig.addWatchTarget("src/assets/javascript");

    // Pass throughs
    eleventyConfig.addPassthroughCopy('src/_redirects');
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "marketing-assets/fonts"});
    eleventyConfig.addPassthroughCopy({"src/assets/images": "marketing-assets/images"});

    // Date Formatting
    eleventyConfig.addFilter("dateShort", (dateObj) => { return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATE_SHORT); });
    eleventyConfig.addFilter("dateFull",  (dateObj) => {  return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATE_FULL); });

    // Output
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }

};