export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg), oklch)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: oklch(10% 0.1 30deg);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklch(0% 1 0deg), $lightness: -10%), oklch)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz 0.034858214 -0.0102294646 -0.0091226416) 100%, black);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(none 0.1 30deg), oklch)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: oklch(none 0.1 30deg);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% none 30deg), oklch)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: oklch(10% none 30deg);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 none), oklch)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: oklch(10% 0.1 none);\n}\n',
  },
]
