// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/a98_rgb/srgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0 0 0), srgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 1 1 1), srgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.5 0.5 0.5), srgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb 0.5039928958 0.5039928958 0.5039928958);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.2 0.4 0.8), srgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb -0.1150054864 0.4006209194 0.8168197501);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -1 0.4 2), srgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb -1.1771710626 0.4006209194 1.9702956516);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -999999 0 0), srgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb -381920.4413887605 0 0);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.4), srgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb -0.0351995287 0.186411239 0.2987070204 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.0), srgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb -0.0351995287 0.186411239 0.2987070204 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb none 0.2 0.3), srgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb none 0.186411239 0.2987070204);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 none 0.3), srgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb 0.0920907435 none 0.3012240955);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 none), srgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb -0.0351995287 0.186411239 none);\n}\n',
  },
]
