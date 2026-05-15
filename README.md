# portfolio

Personal site. Astro static site themed after the **Domino Still Life** palette from my [dotfiles](https://github.com/jon-vx/dotfiles).

## Pages

- `/` — home: bio, projects, links
- `/uses` — hardware + software inventory

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # preview the build
```

## Editing content

Most copy (name, bio, socials, projects, "other" links) lives in `src/data/site.ts`. The /uses page lives in `src/pages/uses.astro`. Theme tokens are at the top of `src/styles/global.css`.
