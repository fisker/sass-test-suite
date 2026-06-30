// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/a98_rgb/a98_rgb.hrx

export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.2 0.4 0.8), a98-rgb)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: color(a98-rgb 0.2 0.4 0.8);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -1 0.4 2), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: color(a98-rgb -1 0.4 2);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb none 0.2 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(a98-rgb none 0.2 0.3);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 none 0.3), a98-rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1 none 0.3);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 none), a98-rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1 0.2 none);\n}\n',
  },
]
