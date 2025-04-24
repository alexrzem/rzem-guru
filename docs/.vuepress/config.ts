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

    public: path.resolve(__dirname, 'public'),
    // site-level locales config

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

        navbar: navbar,
				sidebar: sidebar,
    }),
});
