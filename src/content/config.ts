import { string } from 'astro/zod';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string().optional(),
		author: z.string().optional(),
		reference: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		previewImage: image().optional(),
		secret: z.boolean().default(false),
		tags: z.array(z.string()).default(['other']),
		canonicalURL: z.string().optional(),
	}),
});

const serviceCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		reference: z.string().optional(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		icon: z.string().optional(),
		pageHeader: z.string().optional(),
		tags: z.array(z.string()).default(['other']),
		previewImage: image().optional(),
		collection: z.string().optional(),
		questions: z.array(z.object({
			question: z.string(),
			answer: z.string()
		})).optional(),
		ctaSection: z.object({
			title: z.string(),
			buttonLabel: z.string(),
			buttonLink: z.string()
		}).optional(),
		sidebar: z.object({
			downloadText: z.string().optional(),
			downloadLink: z.string().optional(),
			downloadButtonLabel: z.string().optional(),
		}),
	})
});

export const collections = {
	'blog': blogCollection,
	'services': serviceCollection
};
