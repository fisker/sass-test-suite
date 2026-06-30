// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/no_channels.hrx

export default [
  {
    name: 'positional/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red)}\n',
  },
  {
    name: 'positional/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.adjust($color: red)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/max_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: 0.5)}\n',
  },
  {
    name: 'alpha/max_remaining/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: 0)}\n',
  },
  {
    name: 'alpha/zero/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'alpha/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: 1)}\n',
  },
  {
    name: 'alpha/above_max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: -1)}\n',
  },
  {
    name: 'alpha/below_min/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: 2)}\n',
  },
  {
    name: 'alpha/arg_above_max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: -2)}\n',
  },
  {
    name: 'alpha/arg_below_min/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/min_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: -0.5)}\n',
  },
  {
    name: 'alpha/min_remaining/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: 0.14)}\n',
  },
  {
    name: 'alpha/high/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.64);\n}\n',
  },
  {
    name: 'alpha/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.5), $alpha: -0.14)}\n',
  },
  {
    name: 'alpha/low/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.36);\n}\n',
  },
]
