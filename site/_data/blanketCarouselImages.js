const fs = require("fs");
const path = require("path");

// Replicates the old app's `require.context` directory scan + numeric sort
// (BlanketCarousel), so dropping a new photo into this folder is still all
// that's needed to have it appear in the carousel.
module.exports = () => {
  const dir = path.join(__dirname, "..", "assets", "images", "projects", "blanket", "carousel");
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/assets/images/projects/blanket/carousel/${file}`);
};
