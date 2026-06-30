// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hwb/display_p3.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 0% 100%), display-p3)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 100% 0%), display-p3)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 50% 50%), display-p3)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3 0.5 0.5 0.5);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(80deg 20% 40%), display-p3)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3 0.4937237179 0.5961714385 0.263280729);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20.123456789deg 30.987654321% 40.192837465%), display-p3)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(display-p3 0.5699167279 0.4147338146 0.3256408713);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 200% -125%), display-p3)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3 2.221649714 2.0891595287 2.0108056307);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 999999% -999950%), display-p3)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3 10000.4396382509 10000.1712862873 10000.0110201331);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.4), display-p3)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3 0.6499865104 0.3093627099 0.2280296402 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.0), display-p3)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3 0.6499865104 0.3093627099 0.2280296402 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(none 20% 30%), display-p3)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(display-p3 0.6455550546 0.2397703326 0.2214676273);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg none 30%), display-p3)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: color(display-p3 0.6427370384 0.1801457354 0.0902798862);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% none), display-p3)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: color(display-p3 0.9253883052 0.3826332802 0.2571893552);\n}\n',
  },
]
