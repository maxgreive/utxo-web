import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) =>
        new Date(val).toLocaleDateString("de-DE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      ),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    author: z.string().optional()
  }),
});

export const collections = { blog };
