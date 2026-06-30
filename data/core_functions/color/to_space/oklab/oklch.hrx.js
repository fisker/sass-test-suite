// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklab/oklch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(0% 0 0), oklch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(100% 0 0), oklch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0 0), oklch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklch(50% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0.2 -0.3), oklch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklch(50% 0.3605551275 303.690067526deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklab(0% -2 2), $lightness: -50%), oklch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz -7.6342505681 1.7017041167 -38.7847424763) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% -999999 0), oklch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: oklch(50% 999999 180deg);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.4), oklch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklch(10% 0.3605551275 56.309932474deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.0), oklch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklch(10% 0.3605551275 56.309932474deg / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(none 0.2 0.3), oklch)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: oklch(none 0.3605551275 56.309932474deg);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% none 0.3), oklch)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: oklch(10% 0.3 90deg);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 none), oklch)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: oklch(10% 0.2 0deg);\n}\n',
  },
]
