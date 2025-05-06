import { NavbarOptions } from 'vuepress-theme-hope/client';

export const navbar: NavbarOptions = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Blueprints',
        children: [
			{ text: 'AI Risk Architect', link: '/blueprints/ai_risk_architect/', icon: 'regular:file-image' },
			{ text: 'AI Regulation', link: '/blueprints/ai_regulation/', icon: 'regular:file-image' }
		],
    },

    {
        text: 'Txt2Img',
        children: [
            { text: 'Image Tools', link: '/txt2img/txt2img.md', icon: 'regular:file-image' },
            { text: 'Flux1', link: '/txt2img/flux1/', icon: 'regular:file-image' },
            { text: 'Midjourney', link: '/txt2img/midjourney/', icon: 'regular:file-image' },
            { text: 'Stable Diffusion', link: '/txt2img/sd/', icon: 'regular:file-image' },
        ],
    },
] as NavbarOptions;
