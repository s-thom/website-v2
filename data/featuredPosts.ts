import preval from 'babel-plugin-preval/macro';
import { PageMetadata } from '../types';

const pages: PageMetadata[] = preval([`module.exports = require('./metaGetter').getFeaturedPages('posts')`]);
export default pages;
