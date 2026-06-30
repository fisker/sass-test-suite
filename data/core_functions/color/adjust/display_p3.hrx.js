// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/display_p3.hrx

export default [
  {
    name: 'red/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: 0.5)}\n',
  },
  {
    name: 'red/unitless/output.css',
    data: 'a {\n  b: color(display-p3 0.7 0.5 0.7);\n}\n',
  },
  {
    name: 'red/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: -10%)}\n',
  },
  {
    name: 'red/percent/output.css',
    data: 'a {\n  b: color(display-p3 0.1 0.5 0.7);\n}\n',
  },
  {
    name: 'red/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: 0.9)}\n',
  },
  {
    name: 'red/above_max/output.css',
    data: 'a {\n  b: color(display-p3 1.1 0.5 0.7);\n}\n',
  },
  {
    name: 'red/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: -0.3)}\n',
  },
  {
    name: 'red/below_min/output.css',
    data: 'a {\n  b: color(display-p3 -0.1 0.5 0.7);\n}\n',
  },
  {
    name: 'red/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: 1.9)}\n',
  },
  {
    name: 'red/arg_above_max/output.css',
    data: 'a {\n  b: color(display-p3 2.1 0.5 0.7);\n}\n',
  },
  {
    name: 'red/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: -1.3)}\n',
  },
  {
    name: 'red/arg_below_min/output.css',
    data: 'a {\n  b: color(display-p3 -1.1 0.5 0.7);\n}\n',
  },
  {
    name: 'green/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $green: -0.3)}\n',
  },
  {
    name: 'green/unitless/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.2 0.7);\n}\n',
  },
  {
    name: 'green/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $green: 40%)}\n',
  },
  {
    name: 'green/percent/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.9 0.7);\n}\n',
  },
  {
    name: 'green/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $green: 0.7)}\n',
  },
  {
    name: 'green/above_max/output.css',
    data: 'a {\n  b: color(display-p3 0.2 1.2 0.7);\n}\n',
  },
  {
    name: 'green/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $green: -0.8)}\n',
  },
  {
    name: 'green/below_min/output.css',
    data: 'a {\n  b: color(display-p3 0.2 -0.3 0.7);\n}\n',
  },
  {
    name: 'green/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $green: 1.7)}\n',
  },
  {
    name: 'green/arg_above_max/output.css',
    data: 'a {\n  b: color(display-p3 0.2 2.2 0.7);\n}\n',
  },
  {
    name: 'green/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $green: -1.8)}\n',
  },
  {
    name: 'green/arg_below_min/output.css',
    data: 'a {\n  b: color(display-p3 0.2 -1.3 0.7);\n}\n',
  },
  {
    name: 'blue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $blue: -0.3)}\n',
  },
  {
    name: 'blue/unitless/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.5 0.4);\n}\n',
  },
  {
    name: 'blue/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $blue: 20%)}\n',
  },
  {
    name: 'blue/percent/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.5 0.9);\n}\n',
  },
  {
    name: 'blue/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $blue: 0.7)}\n',
  },
  {
    name: 'blue/above_max/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.5 1.4);\n}\n',
  },
  {
    name: 'blue/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $blue: -0.8)}\n',
  },
  {
    name: 'blue/below_min/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.5 -0.1);\n}\n',
  },
  {
    name: 'blue/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $blue: 1.7)}\n',
  },
  {
    name: 'blue/arg_above_max/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.5 2.4);\n}\n',
  },
  {
    name: 'blue/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $blue: -1.8)}\n',
  },
  {
    name: 'blue/arg_below_min/output.css',
    data: 'a {\n  b: color(display-p3 0.2 0.5 -1.1);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: 0.3, $green: 0.2, $blue: 0.1)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: color(display-p3 0.5 0.7 0.8);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7 / 0.9), $red: 0.5)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: color(display-p3 0.7 0.5 0.7 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(display-p3 0.2 0.5 0.7), $red: 0.5, $alpha: -0.1)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: color(display-p3 0.7 0.5 0.7 / 0.9);\n}\n',
  },
]
