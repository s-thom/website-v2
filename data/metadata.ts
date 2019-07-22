import preval from 'babel-plugin-preval/macro';
import { PageMetadata } from '../types';

// Unfortunately the preval plugin doesn't allow you to pass variables from
// other scopes. Only local variables. It'd love to just do `getFeaturedPages('projects')`
// in the .mdx files, but this is the best that I can do.

export function getAllPosts() {
  const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getAllPages('posts')`]);
  return pages;
}

// export function getAllProjects() {
//   const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getAllPages('projects')`]);
//   return pages;
// }

export function getFeaturedPosts() {
  const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getFeaturedPages('posts')`]);
  return pages;
}

// export function getFeaturedProjects() {
//   const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getFeaturedPages('projects')`]);
//   return pages;
// }
