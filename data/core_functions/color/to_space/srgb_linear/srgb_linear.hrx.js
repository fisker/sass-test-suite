// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/srgb_linear/srgb_linear.hrx

export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.2 0.4 0.8), srgb-linear)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.4 0.8);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear -1 0.4 2), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: color(srgb-linear -1 0.4 2);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear none 0.2 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb-linear none 0.2 0.3);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.1 none 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb-linear 0.1 none 0.3);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.1 0.2 none), srgb-linear)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb-linear 0.1 0.2 none);\n}\n',
  },
]
