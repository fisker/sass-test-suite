// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/prophoto_rgb/prophoto_rgb.hrx

export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.2 0.4 0.8), prophoto-rgb)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.2 0.4 0.8);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb -1 0.4 2), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: color(prophoto-rgb -1 0.4 2);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb none 0.2 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(prophoto-rgb none 0.2 0.3);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 none 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1 none 0.3);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 none), prophoto-rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1 0.2 none);\n}\n',
  },
]
