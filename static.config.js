import axios from 'axios';
import path from 'path';
// import { Post } from './types'
import remarkToc from 'remark-toc';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

/**
 * @type {import('react-static').ReactStaticConfig}
 */
const config = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-css-modules',
    [
      "react-static-plugin-mdx",
      {
        mdxOptions: {
          remarkPlugins: [
            remarkEmoji,
            remarkToc
          ],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            rehypeHighlight
          ],
        },
      }
    ],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
};

export default config;
