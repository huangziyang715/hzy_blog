import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeHighlight from 'rehype-highlight';

export default defineConfig({
  site: 'https://huangziyang715.github.io',
  base: '/hzy_blog',
  integrations: [mdx()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});