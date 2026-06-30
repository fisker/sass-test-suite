export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#000, oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#fff, oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#aaa, oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(73.8018670949% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#28d, oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(61.3651182767% -0.0551812363 -0.1461735982);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(50.123456789 100.987654321 200.192837465), oklab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: oklab(52.7265726495% -0.0228233544 -0.1626243931);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(rgb(0, 100, 0), $red: -50, $blue: 400), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklab(69.4063331508% -0.0570651721 -0.4015687111);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(black, $red: -999999), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz -152693379.43919486 -78732523.7733348 -7157502.161212288) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(18.6989145594% -0.0089460528 -0.0237039602 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(18.6989145594% -0.0089460528 -0.0237039602 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(none 20 30), oklab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklab(17.9105840016% -0.0229309105 -0.0273761753);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 none 30), oklab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklab(12.5934962291% 0.029688781 -0.0622382958);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 none), oklab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklab(17.4737574106% -0.0289569465 0.0360129822);\n}\n',
  },
]
