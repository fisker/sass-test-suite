// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rec2020/prophoto_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0 0 0), prophoto-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 1 1 1), prophoto-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(prophoto-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.5 0.5 0.5), prophoto-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.4728514184 0.4728514184 0.4728514184);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.2 0.4 0.8), prophoto-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.3205854039 0.3793783564 0.7698022311);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -1 0.4 2), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(prophoto-rgb -0.5478493377 0.3839894918 2.1828841348);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -999999 0 0), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(prophoto-rgb -20568106.26542821 -4493352.638848251 785798.3189394);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.4), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1520851228 0.1987719462 0.283976665 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.0), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1520851228 0.1987719462 0.283976665 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 none 0.2 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(prophoto-rgb none 0.1963011404 0.2840567616);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 none 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1451585947 none 0.2808956158);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 none), prophoto-rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1184473522 0.1951112391 none);\n}\n',
  },
]
