// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklch/lch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(0% 0 0deg), lch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(100% 0 0deg), lch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(50% 0 0deg), lch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lch(42% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg), lch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lch(0.6560445721% 11.7741331819 9.0834534639deg);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10.123456789% 0.198765432 30.192837465deg), lch)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: lch(0.4361236864% 33.3265555825 3.6054865629deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklch(0% 1 0deg), $lightness: -10%), lch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 0.034858214 -0.0102294646 -0.0091226416) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 999999 0deg), lch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 76842315886536416 -3783286562682449.5 -5396056208203971) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.4), lch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lch(0.6560445721% 11.7741331819 9.0834534639deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.0), lch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lch(0.6560445721% 11.7741331819 9.0834534639deg / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(none 0.1 30deg), lch)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: lch(none 0.9102620546 87.9725351921deg);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% none 30deg), lch)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: lch(0.9032962963% none none);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 none), lch)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: lch(0.6385915209% 10.510623154 none);\n}\n',
  },
]
