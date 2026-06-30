// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rgb/srgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#000, srgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#fff, srgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#aaa, srgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb 0.6666666667 0.6666666667 0.6666666667);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#28d, srgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb 0.1333333333 0.5333333333 0.8666666667);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(50.123456789 100.987654321 200.192837465), srgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(srgb 0.1965625756 0.3960300169 0.7850699508);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(rgb(0, 100, 0), $red: -50, $blue: 400), srgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb -0.1960784314 0.3921568627 1.568627451);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(black, $red: -999999), srgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb -3921.5647058824 0 0);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.4), srgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb 0.0392156863 0.0784313725 0.1176470588 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 30 / 0.0), srgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb 0.0392156863 0.0784313725 0.1176470588 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(none 20 30), srgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb none 0.0784313725 0.1176470588);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 none 30), srgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb 0.0392156863 none 0.1176470588);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 none), srgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb 0.0392156863 0.0784313725 none);\n}\n',
  },
]
