/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const mdxGenerator = require('@next/mdx');
const withCSS = require('@zeit/next-css');

const mdxOptions = {
  options: {
    remarkPlugins: [
      require('remark-emoji'),
    ],
    rehypePlugins: [
      require('@mapbox/rehype-prism'),
    ],
  }
};
const withMDX = mdxGenerator(mdxOptions);


module.exports = withPlugins([
  [withCSS, {
    useModules: true,
  }],
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'mdx'],
  }]
], {});
