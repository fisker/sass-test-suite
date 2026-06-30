// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/xyz_d50.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), xyz-d50)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz-d50 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), xyz-d50)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz-d50 0.9642956764 1 0.8251046025);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), xyz-d50)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz-d50 0.1776102635 0.1841865185 0.1519731441);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), xyz-d50)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0167107924 0.0112601993 0.003836437);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), xyz-d50)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0172401432 0.0114213638 0.0036552028);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0888853348 -0.0110705646 -0.0091343738);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz-d50 7716936176.70525 0.0112601993 0.0092908422);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), xyz-d50)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0167107924 0.0112601993 0.003836437 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), xyz-d50)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0167107924 0.0112601993 0.003836437 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), xyz-d50)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0042897166 0 -0.0052979368);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), xyz-d50)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0108581615 0.0112601993 0.0092908422);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), xyz-d50)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0177706181 0.0112601993 0.0092908422);\n}\n',
  },
]
