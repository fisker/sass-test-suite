// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3/a98_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0 0 0), a98-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(a98-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 1 1 1), a98-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(a98-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.5 0.5 0.5), a98-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(a98-rgb 0.4961036984 0.4961036984 0.4961036984);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.2 0.4 0.8), a98-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(a98-rgb 0.2482053529 0.4050915621 0.8110198535);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -1 0.4 2), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(a98-rgb -0.9267440317 0.459123582 2.1223637667);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -999999 0 0), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(a98-rgb -3115569.9464425035 788230.9760095418 569282.1313176785);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.4), a98-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1395855294 0.2151252811 0.3095213638 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.0), a98-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1395855294 0.2151252811 0.3095213638 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 none 0.2 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(a98-rgb none 0.2163312901 0.3099034883);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 none 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1153904633 none 0.3115106155);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 none), a98-rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1395855294 0.2151252811 none);\n}\n',
  },
]
