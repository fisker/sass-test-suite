// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/a98_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), a98-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(a98-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), a98-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(a98-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), a98-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(a98-rgb 0.4633483808 0.4633483808 0.4633483808);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), a98-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1855277377 0.0926913904 0.0818650595);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), a98-rgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1889263665 0.0909755641 0.0795209428);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(a98-rgb 0.4634940567 -0.3642836921 -0.1126427123);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(a98-rgb 42562.6792376747 -31021.1046455384 6233.1625417899);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), a98-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1855277377 0.0926913904 0.0818650595 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), a98-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1855277377 0.0926913904 0.0818650595 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), a98-rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1244563961 -0.084601587 -0.1049078937);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), a98-rgb)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1300242938 0.1300242938 0.1300242938);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), a98-rgb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1862731835 0.0856347366 0.1310611506);\n}\n',
  },
]
