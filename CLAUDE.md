# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack) at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

This is a single-page Next.js 16 (App Router) dashboard that visualises data-centre locations on an interactive map.

**Data flow**: `data/locations.ts` exports a static `DataCenter[]` array → passed as props from the server component `app/page.tsx` → down to client components for rendering. There is no API layer or server-side data fetching; all data is compile-time static.

**Server / client split**:
- `app/page.tsx`, `components/Header.tsx`, `components/KpiCards.tsx`, `components/LocationTable.tsx`, `components/ComingSoonBanner.tsx` — server components (no `'use client'`).
- `components/DashboardClient.tsx` — client component that owns the `FilterValue` state and derives the filtered location list for both the map and the table.
- `components/Map.tsx` — client component loaded with `dynamic(..., { ssr: false })` because Leaflet requires `window`. Never remove that flag.
- `components/FilterBar.tsx` — client component (button interactions).

**Leaflet gotcha**: The default Leaflet marker assets break under webpack/Turbopack. `Map.tsx` replaces them with inline SVG `DivIcon`s — do not switch back to `L.Icon` with image URLs without a working asset-path fix.

**Types**: `types/index.ts` defines `DataCenter`, `Country`, and `FilterValue` — the canonical shapes used throughout.

**Styling**: Tailwind CSS v4 (PostCSS plugin). No component library; all styles are utility classes.

## graphify knowledge graph

A knowledge graph is at `graphify-out/`. Before answering architecture or codebase questions, read `graphify-out/GRAPH_REPORT.md`. After modifying source files, rebuild the graph:

```bash
python3 -c "from graphify.watch import _rebuild_code; from pathlib import Path; _rebuild_code(Path('.'))"
```
