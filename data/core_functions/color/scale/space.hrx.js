// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/space.hrx

export default [
  {
    name: 'legacy/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $saturation: -10%, $space: hsl)}\n',
  },
  {
    name: 'legacy/to_legacy/output.css',
    data: 'a {\n  b: rgb(242.25, 12.75, 12.75);\n}\n',
  },
  {
    name: 'legacy/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $a: 10%, $space: lab)}\n',
  },
  {
    name: 'legacy/to_modern/output.css',
    data: 'a {\n  b: hsl(352.5777091359, 128.657405446%, 44.6392534152%);\n}\n',
  },
  {
    name: 'modern/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lab(50% 10 -20), $saturation: -20%, $space: hsl)}\n',
  },
  {
    name: 'modern/to_legacy/output.css',
    data: 'a {\n  b: lab(51.1280465895% 7.8762091679 -15.9907381545);\n}\n',
  },
  {
    name: 'modern/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lab(50% 10 -20), $chroma: 20%, $space: oklch)}\n',
  },
  {
    name: 'modern/to_modern/output.css',
    data: 'a {\n  b: lab(48.9487510552% 24.2085116419 -41.7322265307);\n}\n',
  },
  {
    name: 'powerless/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.scale(hsl(0deg 0% 50%), $space: lab)}\n',
  },
  {
    name: 'powerless/legacy/output.css',
    data: 'a {\n  b: hsl(0, 0%, 50%);\n}\n',
  },
  {
    name: 'powerless/modern/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklch(50% 0 0deg), $space: lab)}\n',
  },
  {
    name: 'powerless/modern/output.css',
    data: 'a {\n  b: oklch(50% 0 none);\n}\n',
  },
  {
    name: 'missing/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgb(none none none))}\n',
  },
  {
    name: 'missing/legacy/same/implicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'missing/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgb(none none none), $space: rgb)}\n',
  },
  {
    name: 'missing/legacy/same/explicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'missing/legacy/analogous/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.scale(hsl(none 50% 50%), $space: hwb)}\n',
  },
  {
    name: 'missing/legacy/analogous/legacy/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'missing/legacy/analogous/modern/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgb(none none none), $space: display-p3)}\n',
  },
  {
    name: 'missing/legacy/analogous/modern/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'missing/modern/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(srgb none none none))}\n',
  },
  {
    name: 'missing/modern/same/implicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'missing/modern/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(srgb none none none), $space: srgb)}\n',
  },
  {
    name: 'missing/modern/same/explicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'missing/modern/analogous/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(srgb none none none), $space: display-p3)}\n',
  },
  {
    name: 'missing/modern/analogous/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
]
