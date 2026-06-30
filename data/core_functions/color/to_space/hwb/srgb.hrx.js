// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hwb/srgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 0% 100%), srgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 100% 0%), srgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 50% 50%), srgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb 0.5 0.5 0.5);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(80deg 20% 40%), srgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb 0.4666666667 0.6 0.2);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20.123456789deg 30.987654321% 40.192837465%), srgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(srgb 0.5980716254 0.4065345646 0.3098765432);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 200% -125%), srgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb 2.25 2.0833333333 2);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 999999% -999950%), srgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb 10000.5 10000.16 9999.99);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.4), srgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb 0.7 0.2833333333 0.2 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.0), srgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb 0.7 0.2833333333 0.2 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(none 20% 30%), srgb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(srgb 0.7 0.2 0.2);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg none 30%), srgb)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: color(srgb 0.7 0.1166666667 0);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% none), srgb)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: color(srgb 1 0.3333333333 0.2);\n}\n',
  },
]
