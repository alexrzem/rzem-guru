import fs from 'node:fs';
import path from 'node:path';

import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

import { navbar } from './navbar';
import { sidebar } from './sidebar';

export default defineUserConfig({
    lang: 'en-US',
    title: 'rzem.guru',
    description: 'AI Stuff',

    bundler: viteBundler(),
		pagePatterns: ['**/*.md', '!**/private.*', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
    plugins: [],
    public: path.resolve(__dirname, 'public'),

    alias: {
        '~/theme': path.resolve(__dirname, './themes'),
        '~/components': path.resolve(__dirname, './themes/components'),
        '~/composables': path.resolve(__dirname, './themes/composables'),
    },

    theme: defaultTheme({
        logo: 'logo.png',
        docsDir: 'docs',
        hostname: 'rzem.guru',
        colorMode: 'auto',
        home: '/',
        navbar: navbar,
        sidebar: sidebar,
    }),
});
