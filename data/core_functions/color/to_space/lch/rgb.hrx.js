// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: rgb(118.9132853673, 118.9132853673, 118.9132853673);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: rgb(50.3195306005, 16.4012435608, 12.9749871225);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), rgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: rgb(51.5386378704, 15.8847345936, 12.2512406149);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(340.1543058221, 427.9584468502%, 11.074503568%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(149.4283545837, 420.5938588221%, 429851.5077692641%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: rgba(50.3195306005, 16.4012435608, 12.9749871225, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: rgba(50.3195306005, 16.4012435608, 12.9749871225, 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: hsl(6.9848409854, 394.5339053958%, 2.7008748146%);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), rgb)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: rgb(27.4643698292, 27.4643698292, 27.4643698292);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), rgb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: rgb(50.8524583137, 14.2717063113, 28.2183712056);\n}\n',
  },
]
