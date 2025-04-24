import { defineNoteConfig } from 'vuepress-theme-plume'

export const promptsConfig = defineNoteConfig({
  dir: 'prompts',
  link: '/prompts/',
  sidebar: [
    {
      text: 'prompts',
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
