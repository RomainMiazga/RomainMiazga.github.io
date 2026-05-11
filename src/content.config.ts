// src/content.config.ts
import { defineCollection, z } from 'astro:content';
// NOUVEAU : On importe l'outil pour lire les fichiers locaux
import { glob } from 'astro/loaders'; 

const projects = defineCollection({
  // NOUVEAU : On dit à Astro d'aller chercher tous les fichiers .md dans le dossier projects
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  
  schema: z.object({
	icon: z.string(),
    badge: z.string(),
    title: z.string(),
    description: z.string(),
    bullets: z.array(z.string()), 
    pdfLink: z.string(),
    order: z.number(),
	image: z.string().optional(),
  }),
});

export const collections = { projects };