import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Content Collections for the hub. Schemas stay loose in this scaffold ticket;
// later tickets (events feed, resources directory, partner listings) will
// tighten validation and add detail routes.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
});

// Homepage (KFGW-4): single `index.md` entry holding the home page's
// editable copy blocks (hero, paths, email signup, support blurb) so
// founders edit Markdown, not JSX. Dates always live in `events/`.
const homepage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/homepage' }),
});

export const collections = { events, resources, partners, homepage };
