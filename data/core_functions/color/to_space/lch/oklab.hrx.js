// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/oklab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(56.8965517241% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(22.8705497236% 0.0494077607 0.0263450791);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), oklab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: oklab(22.9987503998% 0.0516259019 0.0278217129);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 0.0846054544 -0.0138950708 -0.0108304931) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 7373327412.16199 -218927236.26953596 95026466.8003363) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(22.8705497236% 0.0494077607 0.0263450791 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(22.8705497236% 0.0494077607 0.0263450791 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), oklab)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: oklab(none 0.4083922377 0.0807817404);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), oklab)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: oklab(22.4137931034% 0 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), oklab)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: oklab(23.0834634055% 0.0614345616 -0.0007016167);\n}\n',
  },
]
