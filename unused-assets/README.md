# Unused assets

Everything under here used to live in `site/assets/` but isn't referenced by
any page, template, or data file on the live site. It was moved out during
the 2026-09 image reorganization rather than deleted, so it's preserved in
git history and easy to resurrect if a project comes back or a photo turns
out to be wanted after all.

This folder sits outside `site/`, so Eleventy's passthrough copy never ships
it to `_site/` or the deployed site.

What's in here, roughly:
- `images/portfolio/grapple/`, `images/portfolio/nfc/`, `images/portfolio/more/`,
  `images/concepts/` — entire case studies/concepts with no page or home-page
  modal linking to them.
- Old duplicate/backup/resized variants of images whose current version now
  lives under `site/assets/images/projects/<slug>/` (e.g. old top-level
  copies of files that were later moved into a project subfolder, `_bak`/
  `_old` files, alternate crops).
- `videos/videoBg*.mp4` — earlier hero-video takes superseded by
  `site/assets/videos/home-bg.mp4`.

If you want one of these back in circulation, move it into
`site/assets/images/projects/<slug>/` (or wherever fits the pattern used by
the other projects) and wire up a reference to it from the relevant
template/data file.
