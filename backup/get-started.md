# Get Started

This is a normal page, which contains VuePress basics.

## Pages

```mermaid
---
config:
  theme: dark
  look: classic
---
flowchart TB
 subgraph s1["Prompt"]
        n1@{ label: "<span style=\"color:\">Text Prompt Input</span>" }
        n2@{ label: "<span style=\"color:\">Text Encoding</span>" }
  end
 subgraph s2["<span style=color:>Random Noise Generation</span>"]
        n5["Random Noise Generation"]
  end
 subgraph s3["<span style=color:>Diffusion Scheduler</span>"]
        n6@{ label: "<span style=\"color:\">Diffusion Scheduler</span>" }
  end
    n1 --> n2
    n3["Small Circle"] --> s1 & s2 & s3
    s1 --> n7@{ label: "<span style=\"color:\">U-Net Denoising</span>" }
    s2 --> n7
    s3 --> n7
    n1@{ shape: rounded}
    n2@{ shape: rect}
    n6@{ shape: rect}
    n3@{ shape: sm-circ}
    n7@{ shape: rect}


```

You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.

See [routing][] for more details.

## Content

Every markdown file [will be rendered to HTML, then converted to a Vue SFC][content].

VuePress support basic markdown syntax and [some extensions][synatex-extensions], you can also [use Vue features][vue-feature] in it.

## Configuration

VuePress use a `.vuepress/config.js`(or .ts) file as [site configuration][config], you can use it to config your site.

For [client side configuration][client-config], you can create `.vuepress/client.js`(or .ts).

Meanwhile, you can also add configuration per page with [frontmatter][].

## Layouts and customization

Here are common configuration controlling layout of `@vuepress/theme-default`:

- [navbar][]
- [sidebar][]

Check [default theme docs][default-theme] for full reference.

You can [add extra style][style] with `.vuepress/styles/index.scss` file.

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
