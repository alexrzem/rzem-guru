import { MarkdownLink, MarkdownSfcBlocks, MarkdownOptions, Markdown } from '@vuepress/markdown';
import markdownItInclude from 'markdown-it-include';
import markdownItContainer from 'markdown-it-container';

export const markdownExtended = (md: Markdown) => {
    md.use(markdownItInclude);
    md.use(markdownItContainer, 'info', {
        validate: function (params) {
            return params.trim().match(/^info$/);
        },

        render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^info$/);

            if (tokens[idx].nesting === 1) {
                // opening tag
                return '<div class="info-box">';
            } else {
                // closing tag
                return '</div>\n';
            }
        },
    });
};
