// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lab/xyz_d50.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(0% 0 0), xyz-d50)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz-d50 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(100% 0 0), xyz-d50)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz-d50 0.9642956764 1 0.8251046025);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 0 0), xyz-d50)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz-d50 0.1776102635 0.1841865185 0.1519731441);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), xyz-d50)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2886831368 0.1841865185 0.6940286511);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lab(0% -150 150), $lightness: -50%), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz-d50 -0.0905265235 -0.055352823 -0.1251409211);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -999999 0), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz-d50 -247.6132796606 0.1841865185 0.1519731441);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.4), xyz-d50)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0177706181 0.0112601993 -0.0067594366 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.0), xyz-d50)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0177706181 0.0112601993 -0.0067594366 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), xyz-d50)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0049533381 0 -0.0158938104);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), xyz-d50)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0108581615 0.0112601993 -0.0067594366);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), xyz-d50)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0177706181 0.0112601993 0.0092908422);\n}\n',
  },
]
