// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/srgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), srgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), srgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), srgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb 0.4663266093 0.4663266093 0.4663266093);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), srgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb 0.1973314926 0.0643186022 0.0508823024);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), srgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(srgb 0.2021123054 0.0622930768 0.0480440808);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), srgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb 0.5846877703 -0.363197699 -0.0496736133);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), srgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb 22373.5995764218 -13776.5694210365 4642.9330511282);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), srgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb 0.1973314926 0.0643186022 0.0508823024 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), srgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb 0.1973314926 0.0643186022 0.0508823024 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), srgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(srgb 0.133567417 -0.0547400755 -0.0795499207);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), srgb)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(srgb 0.1077034111 0.1077034111 0.1077034111);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), srgb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(srgb 0.1994214052 0.0559674757 0.1106602792);\n}\n',
  },
]
