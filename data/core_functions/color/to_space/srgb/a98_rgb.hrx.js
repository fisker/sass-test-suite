// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/srgb/a98_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0 0 0), a98-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(a98-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 1 1 1), a98-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(a98-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.5 0.5 0.5), a98-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(a98-rgb 0.4961036984 0.4961036984 0.4961036984);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.2 0.4 0.8), a98-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(a98-rgb 0.2814316253 0.3994051501 0.7833135189);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -1 0.4 2), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(a98-rgb -0.8376211647 0.3994051501 2.0319913216);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -999999 0 0), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(a98-rgb -2858844.9973722333 0 0);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.4), a98-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1551137687 0.2123166098 0.3014984164 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.0), a98-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1551137687 0.2123166098 0.3014984164 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb none 0.2 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(a98-rgb none 0.2123166098 0.3014984164);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 none 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1058822156 none 0.2988751674);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 none), a98-rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1551137687 0.2123166098 none);\n}\n',
  },
]
