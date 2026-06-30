// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rgb/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#000, lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#fff, lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#aaa, lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(69.61016583% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#28d, lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(54.4372323192% -5.0725440763 -52.2489046102);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(50.123456789 100.987654321 200.192837465), lab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: lab(43.5786666948% 10.234304882 -57.7772280218);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(rgb(0, 100, 0), $red: -50, $blue: 400), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lab(57.5459692675% 67.2901769646 -142.8196552841);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(black, $red: -999999), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz -152693379.43919498 -78732523.77333494 -7157502.161212263) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(5.8508980612% -1.4961467566 -8.2549264931 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(5.8508980612% -1.4961467566 -8.2549264931 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(none 20 30), lab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lab(5.2408778377% -4.2109320426 -9.2418429616);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 none 30), lab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: lab(1.3209405601% 7.1508367815 -15.0002069297);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 none), lab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lab(5.1399777246% -5.9321982521 7.5003938134);\n}\n',
  },
]
