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

		head: [
			['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
			['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
			['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
			['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
			//['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
			['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
			//['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
			//['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
			//['meta', { name: "theme-color", content: "#ffffff"}],
		],

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
