// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklch/a98_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(0% 0 0deg), a98-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(a98-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(100% 0 0deg), a98-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(a98-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(50% 0 0deg), a98-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(a98-rgb 0.3884711105 0.3884711105 0.3884711105);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg), a98-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1027766429 -0.0609172236 -0.0321025963);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10.123456789% 0.198765432 30.192837465deg), a98-rgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1569345516 -0.1088588763 -0.0385850338);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklch(0% 1 0deg), $lightness: -10%), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(a98-rgb 0.3172861757 -0.2637782362 -0.1086210221);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 999999 0deg), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(a98-rgb 66665573.66889219 -49015758.49665135 -12422989.459212372);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.4), a98-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1027766429 -0.0609172236 -0.0321025963 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.0), a98-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1027766429 -0.0609172236 -0.0321025963 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(none 0.1 30deg), a98-rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(a98-rgb 0.0213511871 0.0047462183 -0.0347458469);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% none 30deg), a98-rgb)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(a98-rgb 0.0432393561 0.0432393561 0.0432393561);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 none), a98-rgb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(a98-rgb 0.0964961623 -0.0571048125 0.0359544994);\n}\n',
  },
]
