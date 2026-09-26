# Baptiste Audugé's portfolio

This is my portfolio, you can find all my experiences, projects and some words about me.
You can find it [here](https://www.auduge.com/).

It is built with [Next.js](https://nextjs.org/) as a fully static export (`output: 'export'`),
styled with CSS Modules, and hosted on [Vercel](https://vercel.com/).

## Editing

All the copy lives in [`src/content/content.ts`](src/content/content.ts); components only handle layout.
The Last Dollar figure plays the sculpture's live stream (`featured.media`), muted and only while on screen.

## Commands

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # static site in out/
pnpm lint
```

The social card `public/og-image.png` is generated from `scripts/og-image.html` (command in the file).

Crafted with ❤️ by Baptiste Audugé.
