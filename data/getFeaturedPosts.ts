import preval from 'babel-plugin-preval/macro';
import { PageMetadata } from '../types';

export default function getFeaturedPosts() {
  const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getFeaturedPages('posts')`]);
  return pages;
}
