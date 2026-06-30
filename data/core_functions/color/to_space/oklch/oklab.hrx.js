// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklch/oklab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(0% 0 0deg), oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(100% 0 0deg), oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(50% 0 0deg), oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(50% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg), oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(10% 0.0866025404 0.05);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10.123456789% 0.198765432 30.192837465deg), oklab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: oklab(10.123456789% 0.1718004519 0.099961501);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklch(0% 1 0deg), $lightness: -10%), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 0.034858214 -0.0102294646 -0.0091226416) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 999999 0deg), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: oklab(9.9999999976% 999998.9999999992 0);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(10% 0.0866025404 0.05 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(10% 0.0866025404 0.05 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(none 0.1 30deg), oklab)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: oklab(none 0.0866025404 0.05);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% none 30deg), oklab)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: oklab(10% 0 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 none), oklab)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: oklab(10% 0.1 0);\n}\n',
  },
]
