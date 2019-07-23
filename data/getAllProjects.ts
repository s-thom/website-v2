import preval from 'babel-plugin-preval/macro';
import { PageMetadata } from '../types';

export default function getAllProjects() {
  const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getAllPages('projects')`]);
  return pages;
}
