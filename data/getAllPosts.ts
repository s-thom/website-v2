import preval from 'babel-plugin-preval/macro';
import { PageMetadata } from '../types';

export default function getAllPosts() {
  const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getAllPages('posts')`]);
  return pages;
}
