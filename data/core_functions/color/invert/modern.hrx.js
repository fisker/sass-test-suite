// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/invert/modern.hrx

export default [
  {
    name: 'zero_min/input.scss',
    data: '@use "sass:color";\na {b: color.invert(color(rec2020 0 0.4 1), $space: rec2020)}\n',
  },
  {
    name: 'zero_min/output.css',
    data: 'a {\n  b: color(rec2020 1 0.6 0);\n}\n',
  },
  {
    name: 'negative_min/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lab(20% -30 110), $space: lab)}\n',
  },
  {
    name: 'negative_min/output.css',
    data: 'a {\n  b: lab(80% 30 -110);\n}\n',
  },
  {
    name: 'polar/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lch(20% 80 50deg), $space: lch)}\n',
  },
  {
    name: 'polar/output.css',
    data: 'a {\n  b: lch(80% 80 230deg);\n}\n',
  },
  {
    name: 'weight/min/input.scss',
    data: '@use "sass:color";\na {b: color.invert(color(a98-rgb 0.1 0.4 0.8), 0%, $space: a98-rgb)}\n',
  },
  {
    name: 'weight/min/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1 0.4 0.8);\n}\n',
  },
  {
    name: 'weight/max/input.scss',
    data: '@use "sass:color";\na {b: color.invert(color(a98-rgb 0.1 0.4 0.8), 100%, $space: a98-rgb)}\n',
  },
  {
    name: 'weight/max/output.css',
    data: 'a {\n  b: color(a98-rgb 0.9 0.6 0.2);\n}\n',
  },
  {
    name: 'weight/middle/input.scss',
    data: '@use "sass:color";\na {b: color.invert(color(a98-rgb 0.1 0.4 0.8), 50%, $space: a98-rgb)}\n',
  },
  {
    name: 'weight/middle/output.css',
    data: 'a {\n  b: color(a98-rgb 0.5 0.5 0.5);\n}\n',
  },
  {
    name: 'weight/high/input.scss',
    data: '@use "sass:color";\na {b: color.invert(color(a98-rgb 0.1 0.4 0.8), 60%, $space: a98-rgb)}\n',
  },
  {
    name: 'weight/high/output.css',
    data: 'a {\n  b: color(a98-rgb 0.58 0.52 0.44);\n}\n',
  },
  {
    name: 'space/modern/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lch(20% 80 50deg), $space: xyz)}\n',
  },
  {
    name: 'space/modern/output.css',
    data: 'a {\n  b: lch(98.9503159926% 3.6006542179 45.9089280707deg);\n}\n',
  },
  {
    name: 'space/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lch(20% 80 50deg), $space: rgb)}\n',
  },
  {
    name: 'space/legacy/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 0.8040115061 1.0427791446 1.4858460828) 100%, black);\n}\n',
  },
  {
    name: 'space/case/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lch(20% 80 50deg), $space: DISPLAY-p3)}\n',
  },
  {
    name: 'space/case/output.css',
    data: 'a {\n  b: lch(97.4036876937% 47.4823953357 211.8732507605deg);\n}\n',
  },
  {
    name: 'space/missing_converted/input.scss',
    data: '@use "sass:color";\na {b: color.invert(color(rec2020 none none none), $space: lab)}\n',
  },
  {
    name: 'space/missing_converted/output.css',
    data: 'a {\n  b: color(rec2020 1 1 1);\n}\n',
  },
  {
    name: 'space/powerless/same/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lch(40% 0% 120deg), $space: lch)}\n',
  },
  {
    name: 'space/powerless/same/output.css',
    data: 'a {\n  b: lch(60% 0 300deg);\n}\n',
  },
  {
    name: 'space/powerless/different/input.scss',
    data: '@use "sass:color";\na {b: color.invert(lch(40% 0% 120deg), $space: lab)}\n',
  },
  {
    name: 'space/powerless/different/output.css',
    data: 'a {\n  b: lch(60% 0 none);\n}\n',
  },
]
