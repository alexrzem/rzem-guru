import { NavbarOptions } from 'vuepress-theme-hope/client';

export const navbar: NavbarOptions = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Blueprints',
        link: '/blueprints/',
    },

    {
        text: 'Txt2Img',
        children: [
            { text: 'Prompting', link: '/txt2img/prompt_generators/' },
            { text: 'Flux1', link: '/txt2img/flux1/' },
            { text: 'Midjourney', link: '/txt2img/midjourney/' },
            { text: 'Stable Diffusion', link: '/txt2img/sd/' },
        ],
    },
] as NavbarOptions;
