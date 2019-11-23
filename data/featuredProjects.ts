import preval from "babel-plugin-preval/macro";
import { PageMetadata } from "../types";

const pages: PageMetadata[] = preval([
  `module.exports = require('./metaGetter').getFeaturedPages('projects')`
]);
export default pages;
