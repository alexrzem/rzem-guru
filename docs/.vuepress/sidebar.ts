import type { SidebarOptions } from "@vuepress/theme-default";

export const sidebar: SidebarOptions = {
  "/blueprints/": [
    {
      text: "Blueprints",
      children: [
        "/blueprints/architectural-blueprints-for-a-philosophical-ai-risk-architect.md",
        "/blueprints/ethical_learning_safeguards.md",
        "/blueprints/ethical_risk_assessment_matrix.md",
        "/blueprints/ethical_transparency_protocol.md",
        "/blueprints/moral_uncertainty_framework.md",
        "/blueprints/philosophical_guardrail_architecture.md",
        "/blueprints/sociotechnical_integration_plan.md",
      ],
    },
  ],
  "/txt2img/": [
    {
      text: "Image Generators",
      link: "/txt2img/txt2img.md",
    },
    {
      text: "Prompting",
      collapsible: true,
      children: [
        {
          text: "Prompt Generators",
          link: "/txt2img/prompt_generators/readme.md",
        },
      ],
    },
    {
      text: "Flux1",
      collapsible: true,
      children: [
        {
          text: "fal.ai",
          link: "https://fal.ai/models",
        },
        {
          text: "Guide",
          link: "/txt2img/flux1/readme.md",
        },
      ],
    },
    {
      text: "Midjourney",
      children: [
        {
          text: "Midjourney",
          link: "https://www.midjourney.com/",
        },
        {
          text: "Moodboards",
          link: "/txt2img/midjourney/moodboards.md",
        },
      ],
    },
    {
      text: "Stable Diffusion",
      children: [
        {
          text: "SDXL",
          link: "/txt2img/sd/",
        },
        {
          text: "CLIP: Contrastive Language-Image Pre-training",
          link: "/txt2img/sd/clip.md",
        },
      ],
    },
  ],
};
