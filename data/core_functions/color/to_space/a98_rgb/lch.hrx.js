// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/a98_rgb/lch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0 0 0), lch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 1 1 1), lch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.5 0.5 0.5), lch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lch(53.7880481926% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.2 0.4 0.8), lch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lch(42.9339299516% 63.8746494696 275.8433881087deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -1 0.4 2), lch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lch(30.0623308533% 244.5624171683 279.0769417748deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -999999 0 0), lch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz -9041452038524.758 -4661998707364.329 -423818064305.86096) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.4), lch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lch(17.7387491045% 23.8457560364 252.4602846081deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.0), lch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lch(17.7387491045% 23.8457560364 252.4602846081deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb none 0.2 0.3), lch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lch(16.8147782656% 27.3150184488 242.6852480988deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 none 0.3), lch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: lch(5.8200823344% 51.4475613847 304.4897928318deg);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 none), lch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lch(15.5541953165% 36.1300043959 139.9466505913deg);\n}\n',
  },
]
