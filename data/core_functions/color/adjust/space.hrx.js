// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/space.hrx

export default [
  {
    name: 'identical/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(50% 0.2 0deg), $space: lab)}\n',
  },
  {
    name: 'identical/output.css',
    data: 'a {\n  b: oklch(50% 0.2 0deg);\n}\n',
  },
  {
    name: 'legacy/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(pink, $saturation: -5%, $space: hsl)}\n',
  },
  {
    name: 'legacy/to_legacy/output.css',
    data: 'a {\n  b: rgb(253.425, 193.575, 204.025);\n}\n',
  },
  {
    name: 'legacy/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(pink, $chroma: -0.01, $space: oklch)}\n',
  },
  {
    name: 'legacy/to_modern/output.css',
    data: 'a {\n  b: rgb(249.5073881917, 194.8272088582, 204.1290059224);\n}\n',
  },
  {
    name: 'modern/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(50% 10 -20), $saturation: 5%, $space: hsl)}\n',
  },
  {
    name: 'modern/to_legacy/output.css',
    data: 'a {\n  b: lab(48.2797960499% 13.4192461856 -26.2119638245);\n}\n',
  },
  {
    name: 'modern/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lab(50% 10 -20), $chroma: 0.01, $space: oklch)}\n',
  },
  {
    name: 'modern/to_modern/output.css',
    data: 'a {\n  b: lab(49.8635566292% 11.8934232635 -23.234292765);\n}\n',
  },
  {
    name: 'powerless/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(hsl(0deg 0% 50%), $space: lab)}\n',
  },
  {
    name: 'powerless/legacy/output.css',
    data: 'a {\n  b: hsl(0, 0%, 50%);\n}\n',
  },
  {
    name: 'powerless/modern/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(oklch(50% 0 0deg), $space: lab)}\n',
  },
  {
    name: 'powerless/modern/output.css',
    data: 'a {\n  b: oklch(50% 0 none);\n}\n',
  },
  {
    name: 'missing/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgb(none none none))}\n',
  },
  {
    name: 'missing/legacy/same/implicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'missing/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgb(none none none), $space: rgb)}\n',
  },
  {
    name: 'missing/legacy/same/explicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'missing/legacy/analogous/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(hsl(none 50% 50%), $space: hwb)}\n',
  },
  {
    name: 'missing/legacy/analogous/legacy/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'missing/legacy/analogous/modern/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgb(none none none), $space: display-p3)}\n',
  },
  {
    name: 'missing/legacy/analogous/modern/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'missing/modern/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(srgb none none none))}\n',
  },
  {
    name: 'missing/modern/same/implicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'missing/modern/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(srgb none none none), $space: srgb)}\n',
  },
  {
    name: 'missing/modern/same/explicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'missing/modern/analogous/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(srgb none none none), $space: display-p3)}\n',
  },
  {
    name: 'missing/modern/analogous/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
]
