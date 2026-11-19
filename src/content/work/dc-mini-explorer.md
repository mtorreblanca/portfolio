---
# SOURCE: repo README (Nov 19). Brush not built yet: don't claim it until it ships.
title: DC Mini Explorer
section: projects
myShare: Designed and built solo
outcome: A Data Commons–style time-series explorer. D3 does the math (scales, paths, bisecting) and React renders the SVG and owns the state.
highlights:
  - Tooltip snaps to the nearest data point, with a focus dot and guide line
  - "Accessible: keyboard navigation with ← / → and screen-reader announcements"
  - Data transforms are pure functions covered by unit tests
tags: [D3, React, TypeScript, Vitest]
visuals:
  - src: ../../assets/work/dc-mini-explorer.jpg
    alt: Line chart of a synthetic population series from 2014 to 2023, with a tooltip reading 2019 · 121
    caption: Synthetic data shaped like Data Commons observations
links:
  demo: https://dc-mini-explorer.vercel.app
  repo: https://github.com/mtorreblanca/dc-mini-explorer
order: 1
---
