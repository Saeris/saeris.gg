// eslint-disable-next-line import/no-unresolved
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  resume: defineCollection({
    loader: glob({
      pattern: `./resume.md`,
      base: `./public`
    })
  }),
  photos: defineCollection({
    loader: glob({
      pattern: `**/index.md`,
      base: `./public/photos`
    })
  })
};
