// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lab/lch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(0% 0 0), lch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(100% 0 0), lch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 0 0), lch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lch(50% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), lch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lch(50% 90.1387818866 303.690067526deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lab(0% -150 150), $lightness: -50%), lch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz -0.0931334424 -0.0559710307 -0.1664628061) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -999999 0), lch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: lch(50% 999999 180deg);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.4), lch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lch(10% 36.0555127546 56.309932474deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.0), lch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lch(10% 36.0555127546 56.309932474deg / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), lch)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: lch(none 36.0555127546 56.309932474deg);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), lch)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: lch(10% 30 90deg);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), lch)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: lch(10% 20 0deg);\n}\n',
  },
]
