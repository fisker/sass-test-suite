// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/srgb_linear.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), srgb-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), srgb-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), srgb-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb-linear 0.1841865185 0.1841865185 0.1841865185);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), srgb-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0322794103 0.0053492596 0.0040157827);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), srgb-linear)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(srgb-linear 0.033766727 0.0051339047 0.0037622653);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb-linear 0.300965983 -0.1085200613 -0.0039066402);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb-linear 24185926345.93111 -7553302222.606848 555275171.9499303);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), srgb-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0322794103 0.0053492596 0.0040157827 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), srgb-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0322794103 0.0053492596 0.0040157827 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), srgb-linear)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(srgb-linear 0.016044052 -0.0043759334 -0.0071369782);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), srgb-linear)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0112601993 0.0112601993 0.0112601993);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), srgb-linear)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0329247775 0.004494318 0.0117575878);\n}\n',
  },
]
