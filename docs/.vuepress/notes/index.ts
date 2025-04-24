import { defineNotesConfig } from 'vuepress-theme-plume';
import { blueprintsConfig } from './blueprints';
import { promptsConfig } from './prompts';
import { txt2imgConfig } from './txt2img';

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [blueprintsConfig, promptsConfig, txt2imgConfig],
});
