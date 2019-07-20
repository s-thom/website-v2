const remarkEmoji = require('remark-emoji');
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [
      remarkEmoji,
    ],
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
});
