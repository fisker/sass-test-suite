// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rgb/lch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#000, lch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#fff, lch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#aaa, lch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lch(69.61016583% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#28d, lch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lch(54.4372323192% 52.4945591121 264.454862058deg);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(50.123456789 100.987654321 200.192837465), lch)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: lch(43.5786666948% 58.6766484583 280.0448319605deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(rgb(0, 100, 0), $red: -50, $blue: 400), lch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lch(57.5459692675% 157.8778700497 295.2276977506deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(black, $red: -999999), lch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz -152693379.43919504 -78732523.77333494 -7157502.161212466) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.4), lch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lch(5.8508980612% 8.3894139559 259.7270636253deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.0), lch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lch(5.8508980612% 8.3894139559 259.7270636253deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(none 20 30), lch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lch(5.2408778377% 10.1559642572 245.5042015895deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 none 30), lch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: lch(1.3209405601% 16.6174809948 295.4878788717deg);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 none), lch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lch(5.1399777246% 9.5627863857 128.3411151091deg);\n}\n',
  },
]
