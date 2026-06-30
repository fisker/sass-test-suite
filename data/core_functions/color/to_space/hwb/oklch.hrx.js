// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hwb/oklch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 0% 100%), oklch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 100% 0%), oklch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 50% 50%), oklch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklch(59.8180730527% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(80deg 20% 40%), oklch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklch(63.647234306% 0.1347039933 125.8397959493deg);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20.123456789deg 30.987654321% 40.192837465%), oklch)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: oklch(56.152833358% 0.0729206312 47.5620794974deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 200% -125%), oklch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz 5.5338099778 5.6426521513 5.4845096668) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 999999% -999950%), oklch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz 3327825161.66407 3501247104.303598 3812875110.896885) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.4), oklch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklch(54.048198828% 0.1432663319 33.0929096205deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.0), oklch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklch(54.048198828% 0.1432663319 33.0929096205deg / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(none 20% 30%), oklch)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: oklch(51.4791397555% 0.1643065395 none);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg none 30%), oklch)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: oklch(49.2675908408% 0.1859716796 32.1460048198deg);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% none), oklch)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: oklch(67.8200001785% 0.2116917103 33.1925785987deg);\n}\n',
  },
]
