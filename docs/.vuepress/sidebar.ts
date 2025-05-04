import { SidebarOptions } from 'vuepress-theme-hope/client';

export const sidebar: SidebarOptions = {
    '/blueprints/': [
        {
            text: 'Blueprints',
            children: [
                {
                    text: 'Philosophical AI Risk',
                    link: '/blueprints/philosophical_ai_risk_architecture/',
                    icon: 'brain',
                    children: [
                        {
                            text: 'Learning Safeguards',
                            icon: 'regular:file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/ethical_learning_safeguards.md',
                        },
                        {
                            text: 'Assessment Matrix',
                            icon: 'regular:file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/ethical_risk_assessment_matrix.md',
                        },
                        {
                            text: 'Transparency Protocol',
                            icon: 'regular:file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/ethical_transparency_protocol.md',
                        },
                        {
                            text: 'Uncertainty Framework',
                            icon: 'regular:file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/moral_uncertainty_framework.md',
                        },
                        {
                            text: 'Guardrail Architecture',
                            icon: 'regular:file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/philosophical_guardrail_architecture.md',
                        },
                        {
                            text: 'Integration Plan',
                            icon: 'regular:file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/sociotechnical_integration_plan.md',
                        },
                    ],
                },
            ],
        },
    ],
    '/txt2img/': [
        {
            text: 'Image Generators',
            icon: 'regular:image',
            link: '/txt2img/txt2img.md',
        },
        {
            text: 'Prompting',
						icon: 'regular:file-image',
            collapsible: false,
            children: [
                {
                    text: 'Prompt Generators',
										icon: 'regular:pen-to-square',
                    link: '/txt2img/prompt_generators/readme.md',
                },
            ],
        },
        {
            text: 'Flux1',
						icon: 'regular:file-image',
            collapsible: false,
            children: [
                {
                    text: 'Black Forest Labs',
										icon: 'regular:paper-plane',
                    link: 'https://bfl.ai/',
                },
                {
                    text: 'Guide',
										icon: 'regular:file-image',
                    link: '/txt2img/flux1/readme.md',
                },
            ],
        },
        {
            text: 'Midjourney',
						icon: 'regular:file-image',
						collapsible: false,
            children: [
                {
                    text: 'Midjourney',
										icon: 'regular:paper-plane',
                    link: 'https://www.midjourney.com/',
                },
                {
                    text: 'Moodboards',
										icon: 'regular:file-lines',
                    link: '/txt2img/midjourney/moodboards.md',
                },
            ],
        },
        {
            text: 'Stable Diffusion',
						icon: 'regular:file-image',
						collapsible: false,
            children: [
                {
                    text: 'SDXL',
										icon: 'regular:file-lines',
                    link: '/txt2img/sd/',
                },
                {
                    text: 'CLIP',
										icon: 'regular:file-lines',
                    link: '/txt2img/sd/clip.md',
                },
            ],
        },
    ],
};
