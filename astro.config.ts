import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
/* remark plugins */
import remarkAttributes from "remark-attributes";
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkSectionize from "remark-sectionize";
import remarkCaptions from "remark-captions";
import remarkDirective from "remark-directive";
import {
  remarkDefinitionList,
  defListHastHandlers
} from "remark-definition-list";
import {
  remarkExtendedTable,
  extendedTableHandlers
} from "remark-extended-table";
/* rehype plugins */
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import rehypeUnwrapImages from "rehype-unwrap-images";
import { rehypeInlineSvg } from "@saeris/rehype-inline-svg";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      remarkDirective,
      remarkAttributes,
      remarkDefinitionList,
      remarkFlexibleMarkers,
      remarkSqueezeParagraphs,
      remarkExtendedTable,
      remarkSectionize,
      remarkCaptions
    ],
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeSlug,
      rehypeUnwrapImages,
      [rehypeInlineSvg, { maxImageSize: 6000 }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: `wrap`
        }
      ]
    ],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
        ...extendedTableHandlers
      }
    }
  },
  integrations: [AstroPWA(), react()],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: `astro/assets/services/sharp`
    }
  },
  devToolbar: {
    enabled: false
  },
  output: `server`,
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
