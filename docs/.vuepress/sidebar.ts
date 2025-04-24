import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebar: SidebarOptions = {
  '/blueprints/': [
    {
      text: 'Blueprints',
      children: [
        '/blueprints/architectural-blueprints-for-a-philosophical-ai-risk-architect.md',
      ],
    },
  ],
  '/prompts/': [
    {
      text: 'Nates Secret Sauce',
      children: [
        '/prompts/nates-secret-sauce-a-prompt-engineering-masterclass-using-19-prompts-to-write-a-47-page-report-on-the-history-of-ai.md',
      ],
    }
  ],
  '/txt2img/': [
    {
      text: 'Flux1',
      collapsible: true,
      children: [
        {
					text: 'Guide',
					link: '/txt2img/flux1/readme.md',}
      ],
    },
    {
      text: 'Midjourney',
      children: [
				{
          text: 'Midjourney',
          link: 'https://www.midjourney.com/',
        },
				{
          text: 'Moodboards',
          link: '/txt2img/midjourney/moodboards.md',
        },
			],
    },
    {
      text: 'Stable Diffusion',
      children: [
        {
          text: 'Guide',
          link: '/txt2img/sd/',
        },
      ],
    },
  ],
}
