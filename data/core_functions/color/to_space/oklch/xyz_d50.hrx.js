// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklch/xyz_d50.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(0% 0 0deg), xyz-d50)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz-d50 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(100% 0 0deg), xyz-d50)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz-d50 0.9642956764 1 0.8251046025);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(50% 0 0deg), xyz-d50)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz-d50 0.1205369596 0.125 0.1031380753);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg), xyz-d50)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0035798411 0.0007262784 -0.0003855337);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10.123456789% 0.198765432 30.192837465deg), xyz-d50)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0087041608 0.0004828135 -0.0007119576);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklch(0% 1 0deg), $lightness: -10%), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0367521128 -0.0089430833 -0.007335282);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 999999 0deg), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz-d50 80704502600957408 -1378296637987749 -4824370636840800);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.4), xyz-d50)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0035798411 0.0007262784 -0.0003855337 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.0), xyz-d50)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0035798411 0.0007262784 -0.0003855337 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(none 0.1 30deg), xyz-d50)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0000385276 0.000031683 -0.0004558074);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% none 30deg), xyz-d50)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0009642957 0.001 0.0008251046);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 none), xyz-d50)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0032845428 0.0007069569 0.0004979172);\n}\n',
  },
]
