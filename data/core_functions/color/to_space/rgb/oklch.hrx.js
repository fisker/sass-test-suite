// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rgb/oklch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#000, oklch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#fff, oklch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#aaa, oklch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklch(73.8018670949% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#28d, oklch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklch(61.3651182767% 0.1562424067 249.3182371499deg);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(50.123456789 100.987654321 200.192837465), oklch)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: oklch(52.7265726495% 0.1642181438 262.0110608448deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(rgb(0, 100, 0), $red: -50, $blue: 400), oklch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklch(69.4063331508% 0.4056030863 261.9120997817deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(black, $red: -999999), oklch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz -152693379.43919486 -78732523.7733348 -7157502.161212236) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.4), oklch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklch(18.6989145594% 0.0253359348 249.3231163305deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.0), oklch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklch(18.6989145594% 0.0253359348 249.3231163305deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(none 20 30), oklch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklch(17.9105840016% 0.0357110855 230.0496886646deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 none 30), oklch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklch(12.5934962291% 0.0689567196 295.5019774519deg);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 none), oklch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklch(17.4737574106% 0.0462108173 128.8017058762deg);\n}\n',
  },
]
