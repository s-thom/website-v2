import preval from 'babel-plugin-preval/macro';
import { PageMetadata } from '../types';

export default function getFeaturedProjects() {
  const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getFeaturedPages('projects')`]);
  return pages;
}
