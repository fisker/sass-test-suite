export default [
  {
    name: 'identical/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0.2 0deg), $space: lab)}\n',
  },
  {
    name: 'identical/output.css',
    data: 'a {\n  b: oklch(50% 0.2 0deg);\n}\n',
  },
  {
    name: 'legacy/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.change(pink, $saturation: 5%, $space: hsl)}\n',
  },
  {
    name: 'legacy/to_legacy/output.css',
    data: 'a {\n  b: rgb(225.075, 221.925, 222.475);\n}\n',
  },
  {
    name: 'legacy/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.change(pink, $chroma: 0.01, $space: oklch)}\n',
  },
  {
    name: 'legacy/to_modern/output.css',
    data: 'a {\n  b: rgb(217.7587741846, 208.8497862891, 210.1600712342);\n}\n',
  },
  {
    name: 'modern/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 10 -20), $saturation: 5%, $space: hsl)}\n',
  },
  {
    name: 'modern/to_legacy/output.css',
    data: 'a {\n  b: lab(53.9442763509% 2.9406893179 -6.1872703789);\n}\n',
  },
  {
    name: 'modern/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 10 -20), $chroma: 0.01, $space: oklch)}\n',
  },
  {
    name: 'modern/to_modern/output.css',
    data: 'a {\n  b: lab(50.5994458541% 1.4999074176 -3.4111169436);\n}\n',
  },
  {
    name: 'powerless/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.change(hsl(0deg 0% 50%), $space: lab)}\n',
  },
  {
    name: 'powerless/legacy/output.css',
    data: 'a {\n  b: hsl(0, 0%, 50%);\n}\n',
  },
  {
    name: 'powerless/modern/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklch(50% 0 0deg), $space: lab)}\n',
  },
  {
    name: 'powerless/modern/output.css',
    data: 'a {\n  b: oklch(50% 0 none);\n}\n',
  },
  {
    name: 'missing/arg/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(pink, $red: none)}\n',
  },
  {
    name: 'missing/arg/legacy/same/implicit/output.css',
    data: 'a {\n  b: rgb(none 192 203);\n}\n',
  },
  {
    name: 'missing/arg/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(pink, $red: none, $space: rgb)}\n',
  },
  {
    name: 'missing/arg/legacy/same/explicit/output.css',
    data: 'a {\n  b: rgb(none 192 203);\n}\n',
  },
  {
    name: 'missing/arg/legacy/analogous/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.change(hsl(100deg 50% 50%), $hue: none, $space: hwb)}\n',
  },
  {
    name: 'missing/arg/legacy/analogous/legacy/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'missing/arg/legacy/analogous/modern/input.scss',
    data: '@use "sass:color";\na {b: color.change(pink, $red: none, $space: display-p3)}\n',
  },
  {
    name: 'missing/arg/legacy/analogous/modern/output.css',
    data: 'a {\n  b: rgb(0, 198.1453699836, 205.7002828396);\n}\n',
  },
  {
    name: 'missing/arg/modern/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb 0.1 0.2 0.3), $red: none)}\n',
  },
  {
    name: 'missing/arg/modern/same/implicit/output.css',
    data: 'a {\n  b: color(srgb none 0.2 0.3);\n}\n',
  },
  {
    name: 'missing/arg/modern/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb 0.1 0.2 0.3), $red: none, $space: srgb)}\n',
  },
  {
    name: 'missing/arg/modern/same/explicit/output.css',
    data: 'a {\n  b: color(srgb none 0.2 0.3);\n}\n',
  },
  {
    name: 'missing/arg/modern/analogous/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb 0.1 0.2 0.3), $red: none, $space: display-p3)}\n',
  },
  {
    name: 'missing/arg/modern/analogous/output.css',
    data: 'a {\n  b: color(srgb none 0.2018961688 0.3005594241);\n}\n',
  },
  {
    name: 'missing/color/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgb(none none none))}\n',
  },
  {
    name: 'missing/color/legacy/same/implicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'missing/color/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgb(none none none), $space: rgb)}\n',
  },
  {
    name: 'missing/color/legacy/same/explicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'missing/color/legacy/analogous/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.change(hsl(none 50% 50%), $space: hwb)}\n',
  },
  {
    name: 'missing/color/legacy/analogous/legacy/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'missing/color/legacy/analogous/modern/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgb(none none none), $space: display-p3)}\n',
  },
  {
    name: 'missing/color/legacy/analogous/modern/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'missing/color/modern/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb none none none))}\n',
  },
  {
    name: 'missing/color/modern/same/implicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'missing/color/modern/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb none none none), $space: srgb)}\n',
  },
  {
    name: 'missing/color/modern/same/explicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'missing/color/modern/analogous/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb none none none), $space: display-p3)}\n',
  },
  {
    name: 'missing/color/modern/analogous/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
]
