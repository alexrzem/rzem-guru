import fs from 'node:fs';
import path from 'node:path';

import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
    lang: 'en-US',

    title: 'rzem.guru',
    description: 'AI Stuff',

    public: path.resolve(__dirname, 'public'),
    pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],

    alias: {
        '~/theme': path.resolve(__dirname, './themes'),
        '~/components': path.resolve(__dirname, './themes/components'),
        '~/composables': path.resolve(__dirname, './themes/composables'),
    },

    bundler: viteBundler(),
    plugins: [],

    theme: defaultTheme({
        logo: 'logo.png',
        docsDir: 'docs',

        navbar: [
            { text: 'Home', link: '/' },
						{ text: 'Blueprints', link: '/blueprints' },
            { text: 'Prompts', link: '/prompts' },
            { text: 'Txt2Img', 
							prefix: '/txt2img/',
							children: [
								{text: 'Flux1', link: '/flux1'},
								{text: 'Midjourney', link: '/midjourney'},
								{text: 'Stable Diffusion', link: '/sd'}
							],

						},
        ],
    }),
});
