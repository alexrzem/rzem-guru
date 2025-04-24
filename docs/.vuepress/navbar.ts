import { defineNavbarConfig } from 'vuepress-theme-plume';
import { version } from '../../package.json';

export const navbar = defineNavbarConfig([
    {
        text: 'Blueprints',
        icon: 'icon-park-outline:guide-board',
        link: '/blueprints/',
        activeMatch: '^/blueprints/',
    },
    {
        text: 'Prompts',
        icon: 'icon-park-outline:setting-two',
        link: '/prmpts/',
        activeMatch: '^/prmpts/',
    },
    {
        text: 'Txt2Image',
        icon: 'icon-park-outline:more-three',
        items: [
            {
                text: 'Flux1',
                link: '/txt2img/flux1/',
            },
            {
                text: 'Stable Diffusion',
								link: '/txt2img/stable-diffusion/',
            },
        ],
    },
]);
