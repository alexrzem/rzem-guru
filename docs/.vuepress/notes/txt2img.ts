import { defineNoteConfig } from 'vuepress-theme-plume'

export const txt2imgConfig = defineNoteConfig({
  dir: 'txt2img',
  link: '/txt2img/',
  sidebar: [
    {
      text: 'txt2img',
      collapsed: false,
      items: [
        'intro',
        'basic',
        'locales',
        'notes',
      ],
    },
    {
      text: 'frontmatter',
      prefix: 'frontmatter',
      collapsed: false,
      items: [
        'basic',
        'article',
      ],
    },
  ],
})
