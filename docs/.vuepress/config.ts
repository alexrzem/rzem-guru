import path from 'node:path';

import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { hopeTheme } from 'vuepress-theme-hope';

import { markdownExtended } from './markdown';
import { navbar } from './navbar';
import { sidebar } from './sidebar';

export default defineUserConfig({
    lang: 'en-US',
    title: 'rzem.guru',
    description: '',

    bundler: viteBundler(),
    pagePatterns: ['**/*.md', '!**/private.*', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
    plugins: [],
    public: path.resolve(__dirname, 'public'),

    alias: {
        '~/theme': path.resolve(__dirname, './themes'),
        '~/components': path.resolve(__dirname, './themes/components'),
        '~/composables': path.resolve(__dirname, './themes/composables'),
    },

    extendsMarkdown: markdownExtended,

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
        //['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
        //['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
        //['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
        //['meta', { name: "theme-color", content: "#ffffff"}],
    ],

    theme: hopeTheme({
        darkmode: 'enable', // or "toggle", "auto", "enable", "disable", "switch"
        logo: 'logo.png',
        navbar: navbar,
        sidebar: sidebar,
        print: false,
        markdown: {
            codeTabs: true,
            component: true,
            imgMark: true,
            include: true,
        },
        plugins: {
            docsearch: {
                // plugin options here
                // appId, apiKey and indexName are required
            },
            icon: {
                assets: 'fontawesome', // keywords: "iconify", "fontawesome", "fontawesome-with-brands"
            },
        },
    }),
});
