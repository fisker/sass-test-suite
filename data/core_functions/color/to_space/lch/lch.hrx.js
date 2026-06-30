export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), lch)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: lch(10% 20 30deg);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), lch)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 0.0846054544 -0.0138950708 -0.0108304931) 100%, black);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), lch)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: lch(none 20 30deg);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), lch)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: lch(10% none 30deg);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), lch)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: lch(10% 20 none);\n}\n',
  },
]
