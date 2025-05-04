---
title: stablediffusion
icon: regular:file-image
---
# Stable Diffusion

## Basic SDXL Refiner Workflow

### What is SDXL?
SDXL (Stable Diffusion XL) is an advanced AI image generation model that creates higher quality images than previous versions. It's known for better composition, details, and understanding of prompts.

### Base + Refiner Approach
A typical SDXL workflow uses two models:
1. **Base Model**: Creates the initial image structure and composition
2. **Refiner Model**: Enhances details and quality of the base image

### Typical Steps in an SDXL Refiner Workflow:

1. **Load Models**:
   - Base Model Loader - Loads the SDXL base model
   - Refiner Model Loader - Loads the SDXL refiner model
   
2. **Text Prompting**:
   - Positive Prompt - Describes what you want in the image
   - Negative Prompt - Describes what you want to avoid

3. **Create Empty Latent Image**:
   - Sets dimensions (width/height) of your output image
   - Sets batch size (how many images to generate at once)

4. **Base Model Sampling**:
   - Takes your prompt and uses the base model to create the initial image
   - Parameters include seed (controls randomness), steps (how many iterations), and CFG (how closely to follow your prompt)
   
5. **Refiner Model Sampling**:
   - Takes the output from the base model and refines it
   - Usually runs fewer steps than the base model
   - Uses a "denoise" parameter to control how much refinement to apply

6. **Decode Image**:
   - VAE Decoder - Converts the mathematical representation back into a viewable image

7. **Save/Preview Image**:
   - Displays and/or saves the final refined image

### Key Parameters:

### **Seed**: Controls randomness - same seed produces similar results
### **Steps**: How many iterations - more steps generally means more detail
### **CFG Scale**: How closely to follow the prompt - higher values mean stricter adherence
### **Sampler**: Algorithm used (like Euler, DPM++, etc.)
### **Denoise**: For refiners, controls how much of the original image to modify

If you'd like me to explain any of these concepts in more detail, or if you manage to upload the specific workflow file, I'd be happy to provide a more customized explanation based on your workflow.
