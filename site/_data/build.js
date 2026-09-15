// A cache-busting token for local JS/CSS asset URLs. Cloudflare (fronting
// devicist.com) caches .js/.css by extension for hours regardless of how
// fresh the underlying file is, so a plain deploy can leave visitors on a
// stale script indefinitely. Appending ?v=<this> to each asset URL gives
// every build a new URL, which is always a cache miss - the HTML itself
// isn't cached this aggressively, so the new query string reaches visitors
// as soon as they load (or reload) any page.
module.exports = {
  version: String(Date.now()),
};
