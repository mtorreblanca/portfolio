import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One collection for every card on the page.
 * `section` decides where the card is rendered:
 *   - "projects" → personal projects (DC Mini Explorer, Prompt-eval)
 *   - "work"     → professional work (Walmart, Guros, NBC, MCP)
 * If a required field is missing, `astro build` fails, so no card ships half-filled.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      section: z.enum(['projects', 'work']),
      company: z.string().optional(), // text only, never a logo
      myShare: z.string(), // precise: "I built X" vs "I was part of the team that..."
      outcome: z.string(), // the one line a recruiter reads
      metric: z.string().optional(), // e.g. "+100% traffic"
      tags: z.array(z.string()).min(1),
      visual: z
        .object({
          type: z.enum(['image', 'gif', 'diagram']),
          src: image(), // local file in src/assets, optimized by Astro
          alt: z.string().min(1),
          capturedOn: z.coerce.date(), // public screenshots are dated
        })
        .optional(),
      links: z
        .object({
          demo: z.url().optional(),
          repo: z.url().optional(),
          live: z.url().optional(),
        })
        .default({}),
      order: z.number().int(), // sort order inside its section
      draft: z.boolean().default(false), // true = hidden from the page
    }),
});

export const collections = { work };
