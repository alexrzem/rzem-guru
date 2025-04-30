import type { NavbarOptions } from "@vuepress/theme-default";

export const navbar: NavbarOptions = [
  { text: "Home", link: "/" },
  { text: "Blueprints", children: [{ text: "Philosophical AI Risk Architect", link: "/blueprints/architectural-blueprints-for-a-philosophical-ai-risk-architect.md" }] },

  {
    text: "Txt2Img",
    children: [
      { text: "Prompting", link: "/txt2img/prompt_generators/" },
      { text: "Flux1", link: "/txt2img/flux1/" },
      { text: "Midjourney", link: "/txt2img/midjourney/" },
      { text: "Stable Diffusion", link: "/txt2img/sd/" },
    ],
  },
] as NavbarOptions;
