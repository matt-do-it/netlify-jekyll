import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "devCommand": "jekyll serve --port={PORT}",
    experimental: {
    ssg: {
      name: "jekyll",
      logPatterns: { up: [" Server running"] },
      passthrough: []
    }
  },
    contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["_posts"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "_posts/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "subline", type: "string", required: true },
            { name: 'image', type: 'image' }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "assets",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]

})
