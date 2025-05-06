import { SidebarOptions } from 'vuepress-theme-hope/client';

export const sidebar: SidebarOptions = {
    '/blueprints/': [
        {
            text: 'Blueprints',
            children: [
                {
                    text: 'AI Risk Architect',
                    link: '/blueprints/ai_risk_architect/',
                    icon: 'brain',
                    collapsible: true,
                    children: [
                        {
                            text: 'Assessment Frameworks',
                            icon: 'regular:file-lines',
                            link: '/blueprints/ai_risk_architect/ai_risk_assessment_frameworks.md',
                        },
                        {
                            text: 'AI Governance',
                            icon: 'regular:file-lines',
                            collapsible: true,
                            children: [
                                {
                                    text: 'AI Governance Structures',
                                    icon: 'regular:file-lines',
                                    link: '/blueprints/ai_risk_architect/ai_governance/structures.md',
                                },
                                {
                                    text: 'AI Governance Policies',
                                    icon: 'regular:file-lines',
                                    link: '/blueprints/ai_risk_architect/ai_governance/policies.md',
                                },
                                {
                                    text: 'AI Governance Procedures',
                                    icon: 'regular:file-lines',
                                    link: '/blueprints/ai_risk_architect/ai_governance/procedures.md',
                                },
                            ],
                        },
                        {
                            text: 'AI Risk Workshops',
                            icon: 'regular:file-lines',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Non-technical Agenda',
                                    icon: 'regular:file-lines',
                                    link: '/blueprints/ai_risk_architect/risk_workshops/nontechnical_stakeholders.md',
                                },
                                {
                                    text: 'Technical Agenda',
                                    icon: 'regular:file-lines',
                                    link: '/blueprints/ai_risk_architect/risk_workshops/technical_stakeholders.md',
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'AI Regulation',
                    icon: 'regular:file-lines',
                    collapsible: true,
                    link: '/blueprints/ai_regulation/',
                    children: [
                        {
                            text: 'ISO/IEC 27001',
                            icon: 'regular:file-lines',
                            link: '/blueprints/ai_regulation/iso_iec_27001.md',
                        },
                    ],
                },
            ],
        },
    ],
    '/txt2img/': [
        {
            text: 'Image Tools',
            icon: 'regular:image',
            collapsible: false,
            children: [
                {
                    text: 'Image Generators',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/txt2img.md',
                },
				{
                    text: 'Prompt Generators',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/prompt_generators.md',
                },
            ],
        },
        {
            text: 'Flux1',
            icon: 'regular:file-image',
			link: '/txt2img/flux1/',
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
                    link: '/txt2img/flux1/guide.md',
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
				{
                    text: 'Style References',
                    icon: 'regular:file-lines',
                    link: '/txt2img/midjourney/style_references.md',
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
