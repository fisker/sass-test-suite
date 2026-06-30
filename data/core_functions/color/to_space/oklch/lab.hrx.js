// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklch/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(0% 0 0deg), lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(100% 0 0deg), lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(50% 0 0deg), lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(42% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg), lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(0.6560445721% 11.6264789616 1.8588165965);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10.123456789% 0.198765432 30.192837465deg), lab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: lab(0.4361236864% 33.2605927016 2.0957767361);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklch(0% 1 0deg), $lightness: -10%), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 0.034858214 -0.0102294646 -0.0091226416) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 999999 0deg), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 76838084903189984 -3783160937243755.5 -5396110736556776) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(0.6560445721% 11.6264789616 1.8588165965 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(0.6560445721% 11.6264789616 1.8588165965 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(none 0.1 30deg), lab)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: lab(none 0.0322037534 0.9096922152);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% none 30deg), lab)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: lab(0.9032962963% 0 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 none), lab)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: lab(0.6385915209% 10.50938712 0.1611876153);\n}\n',
  },
]
