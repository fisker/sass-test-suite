// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rec2020/a98_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0 0 0), a98-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(a98-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 1 1 1), a98-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(a98-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.5 0.5 0.5), a98-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(a98-rgb 0.5417153213 0.5417153213 0.5417153213);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.2 0.4 0.8), a98-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(a98-rgb 0.13489511 0.4629710676 0.8371559205);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -1 0.4 2), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(a98-rgb -1.1646526275 0.5655440386 1.9874528803);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -999999 0 0), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(a98-rgb -1119831.7269648165 407249.8039869511 187156.9941916847);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.4), a98-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1470288666 0.2765731567 0.3660737554 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.0), a98-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1470288666 0.2765731567 0.3660737554 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 none 0.2 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(a98-rgb none 0.2824471442 0.3668416445);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 none 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1694794184 none 0.3702410451);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 none), a98-rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1707192347 0.278433765 none);\n}\n',
  },
]
