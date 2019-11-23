/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

/**
 * @typedef {import('../types').PageMetadata} PageMetadata
 */

const META_REGEX = /export\s+const\s+metadata\s+=\s+(\{(\n|.)*?\n\})/;
const PAGE_REGEX = /\.mdx?$/;
const PAGES_DIR = path.join(process.cwd(), "./pages/");

/**
 * @param {string} pagePath Path of the post inside the pages directory
 * @returns {PageMetadata}
 */
function getPageMeta(pagePath) {
  const fileLocation = path.join(PAGES_DIR, pagePath);
  const contents = fs.readFileSync(fileLocation, "utf8");
  const match = META_REGEX.exec(contents);
  if (!match || typeof match[1] !== "string")
    throw new Error(`${fileLocation} needs to export const metadata = {}`);

  const meta = eval("(" + match[1] + ")");

  return {
    ...meta,
    path: pagePath.replace(/\.mdx?$/, "")
  };
}

/**
 * Filter featured pages
 * @param {PageMetadata} pageMeta
 * @returns {boolean}
 */
function filterPublishedPages(pageMeta) {
  return pageMeta.published; // This line is purely for making diffs nicer if more conditions are added
}

/**
 * Filter featured pages
 * @param {PageMetadata} pageMeta
 * @returns {boolean}
 */
function filterFeaturedPages(pageMeta) {
  return (
    pageMeta.published && pageMeta.featured // This line is purely for making diffs nicer if more conditions are added
  );
}

/**
 * @param {PageMetadata} a
 * @param {PageMetadata} b
 * @returns {number}
 */
function sortPages(a, b) {
  // Edited date take priority over original publish date
  const aDate = a.edited || a.date || undefined;
  const bDate = b.edited || b.date || undefined;

  if (aDate) {
    if (bDate) {
      // Both posts have dates, compare
      // Sort desc, so latest at top
      const dateDiff = bDate.getTime() - aDate.getTime();
      if (dateDiff) {
        return dateDiff;
      } else {
        // Dates are the same, go to next comparison step
      }
    } else {
      // b does not have a date, so b goes first
      return 1;
    }
  } else {
    if (bDate) {
      // a does not have a date, so goes first
      return -1;
    } else {
      // Neither post has a date, so move on to the next step
    }
  }

  // No difference in date, so sort by title
  return a.title.localeCompare(b.title);
}

/**
 * @param {string} folderPath
 * @returns {PageMetadata[]}
 */
function getAllPages(folderPath) {
  return fs
    .readdirSync(path.join(PAGES_DIR, folderPath))
    .filter(file => file.match(PAGE_REGEX))
    .map(filename => getPageMeta(path.join(folderPath, filename)))
    .filter(filterPublishedPages)
    .sort(sortPages);
}

/**
 * @param {string} folderPath
 * @returns {PageMetadata[]}
 */
function getFeaturedPages(folderPath) {
  return getAllPages(folderPath).filter(filterFeaturedPages);
}

module.exports = {
  getPageMeta,
  getAllPages,
  getFeaturedPages
};
