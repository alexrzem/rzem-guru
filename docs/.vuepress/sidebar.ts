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
                            icon: 'file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/ethical_learning_safeguards.md',
                        },
                        {
                            text: 'Assessment Matrix',
                            icon: 'file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/ethical_risk_assessment_matrix.md',
                        },
                        {
                            text: 'Transparency Protocol',
                            icon: 'file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/ethical_transparency_protocol.md',
                        },
                        {
                            text: 'Uncertainty Framework',
                            icon: 'file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/moral_uncertainty_framework.md',
                        },
                        {
                            text: 'Guardrail Architecture',
                            icon: 'file-lines',
                            link: '/blueprints/philosophical_ai_risk_architecture/philosophical_guardrail_architecture.md',
                        },
                        {
                            text: 'Integration Plan',
                            icon: 'file-lines',
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
            icon: 'image',
            link: '/txt2img/txt2img.md',
        },
        {
            text: 'Prompting',
						icon: 'pen-to-square',
            collapsible: true,
            children: [
                {
                    text: 'Prompt Generators',
										icon: 'file-lines',
                    link: '/txt2img/prompt_generators/readme.md',
                },
            ],
        },
        {
            text: 'Flux1',
						icon: 'file-image',
            collapsible: true,
            children: [
                {
                    text: 'fal.ai',
										icon: 'paper-plane',
                    link: 'https://fal.ai/models',
                },
                {
                    text: 'Guide',
										icon: 'file-image',
                    link: '/txt2img/flux1/readme.md',
                },
            ],
        },
        {
            text: 'Midjourney',
						icon: 'file-image',
            children: [
                {
                    text: 'Midjourney',
										icon: 'paper-plane',
                    link: 'https://www.midjourney.com/',
                },
                {
                    text: 'Moodboards',
										icon: 'file-lines',
                    link: '/txt2img/midjourney/moodboards.md',
                },
            ],
        },
        {
            text: 'Stable Diffusion',
						icon: 'file-image',
            children: [
                {
                    text: 'SDXL',
										icon: 'file-lines',
                    link: '/txt2img/sd/',
                },
                {
                    text: 'CLIP: Contrastive Language-Image Pre-training',
										icon: 'file-lines',
                    link: '/txt2img/sd/clip.md',
                },
            ],
        },
    ],
};
