// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/hwb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), hwb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), hwb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), hwb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: hsl(0, 0%, 46.6326609284%);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), hwb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: hsl(5.5048306165, 59.0012292082%, 12.4106897496%);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), hwb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: hsl(5.5490985392, 61.5887632777%, 12.5078193109%);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), hwb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(340.1543058221, 427.9584468502%, 11.074503568%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), hwb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(149.4283545837, 420.5938588221%, 429851.5077692638%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), hwb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(5.5048306165, 59.0012292082%, 12.4106897496%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), hwb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(5.5048306165, 59.0012292082%, 12.4106897496%, 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), hwb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: hsl(6.9848409854, 394.5339053958%, 2.7008748146%);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), hwb)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: hsl(0, 0%, 10.7703411095%);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), hwb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: hsl(0, 56.1707811732%, 12.7694440441%);\n}\n',
  },
]
