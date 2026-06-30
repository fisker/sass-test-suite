export default [
  {
    name: 'x/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: 0.5)}\n',
  },
  {
    name: 'x/unitless/output.css',
    data: 'a {\n  b: color(xyz-d50 0.7 0.5 0.7);\n}\n',
  },
  {
    name: 'x/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: -10%)}\n',
  },
  {
    name: 'x/percent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.1 0.5 0.7);\n}\n',
  },
  {
    name: 'x/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: 0.9)}\n',
  },
  {
    name: 'x/above_max/output.css',
    data: 'a {\n  b: color(xyz-d50 1.1 0.5 0.7);\n}\n',
  },
  {
    name: 'x/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: -0.3)}\n',
  },
  {
    name: 'x/below_min/output.css',
    data: 'a {\n  b: color(xyz-d50 -0.1 0.5 0.7);\n}\n',
  },
  {
    name: 'x/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: 1.9)}\n',
  },
  {
    name: 'x/arg_above_max/output.css',
    data: 'a {\n  b: color(xyz-d50 2.1 0.5 0.7);\n}\n',
  },
  {
    name: 'x/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: -1.3)}\n',
  },
  {
    name: 'x/arg_below_min/output.css',
    data: 'a {\n  b: color(xyz-d50 -1.1 0.5 0.7);\n}\n',
  },
  {
    name: 'y/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $y: -0.3)}\n',
  },
  {
    name: 'y/unitless/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.2 0.7);\n}\n',
  },
  {
    name: 'y/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $y: 40%)}\n',
  },
  {
    name: 'y/percent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.9 0.7);\n}\n',
  },
  {
    name: 'y/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $y: 0.7)}\n',
  },
  {
    name: 'y/above_max/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 1.2 0.7);\n}\n',
  },
  {
    name: 'y/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $y: -0.8)}\n',
  },
  {
    name: 'y/below_min/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 -0.3 0.7);\n}\n',
  },
  {
    name: 'y/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $y: 1.7)}\n',
  },
  {
    name: 'y/arg_above_max/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 2.2 0.7);\n}\n',
  },
  {
    name: 'y/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $y: -1.8)}\n',
  },
  {
    name: 'y/arg_below_min/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 -1.3 0.7);\n}\n',
  },
  {
    name: 'z/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $z: -0.3)}\n',
  },
  {
    name: 'z/unitless/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.5 0.4);\n}\n',
  },
  {
    name: 'z/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $z: 20%)}\n',
  },
  {
    name: 'z/percent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.5 0.9);\n}\n',
  },
  {
    name: 'z/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $z: 0.7)}\n',
  },
  {
    name: 'z/above_max/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.5 1.4);\n}\n',
  },
  {
    name: 'z/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $z: -0.8)}\n',
  },
  {
    name: 'z/below_min/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.5 -0.1);\n}\n',
  },
  {
    name: 'z/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $z: 1.7)}\n',
  },
  {
    name: 'z/arg_above_max/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.5 2.4);\n}\n',
  },
  {
    name: 'z/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $z: -1.8)}\n',
  },
  {
    name: 'z/arg_below_min/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2 0.5 -1.1);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: 0.3, $y: 0.2, $z: 0.1)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: color(xyz-d50 0.5 0.7 0.8);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7 / 0.9), $x: 0.5)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: color(xyz-d50 0.7 0.5 0.7 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(xyz-d50 0.2 0.5 0.7), $x: 0.5, $alpha: -0.1)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: color(xyz-d50 0.7 0.5 0.7 / 0.9);\n}\n',
  },
]
