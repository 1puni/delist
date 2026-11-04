# Delist

A tiny, open-source checklist for leaving Swedish people-search directories.
Intended home: https://delist.1puni.com.

Five official removal links, a mobile-operator reminder, and checkboxes saved
only in the visitor’s browser. No accounts, analytics, third-party assets or build step.

Serve `dist/` with any static web server. For example:

```sh
uv run --no-project python -m http.server 8767 --directory dist
```

Links and flows checked 2026-11-04. A tick records the visitor's own progress;
it does not independently verify removal. Update links via a pull request.

MIT licensed. Made by [1puni](https://1puni.com).

Visual direction requested by V: Swedish, inspired by Allmänningen's yellow,
blue and red poster typography. Anton and Space Grotesk are bundled under
SIL OFL; their licenses are in `dist/assets/`. Site code remains MIT.

## Hosting

Served on 1puni's VPS through the existing site target. Declaration:
`deploy/sites/delist/site.yaml`. No ChatGPT Sites dependency is required.
See `docs/search.md` for search discovery and measurement next steps.
Agent instructions are published at `/AGENTS.md`.
