export default [
  {
    name: 'red/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $red: 0.5)}\n',
  },
  {
    name: 'red/unitless/output.css',
    data: 'a {\n  b: color(srgb-linear 0.5 0.5 0.7);\n}\n',
  },
  {
    name: 'red/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $red: 50%)}\n',
  },
  {
    name: 'red/percent/output.css',
    data: 'a {\n  b: color(srgb-linear 0.5 0.5 0.7);\n}\n',
  },
  {
    name: 'red/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $red: 1.2)}\n',
  },
  {
    name: 'red/out_of_range/output.css',
    data: 'a {\n  b: color(srgb-linear 1.2 0.5 0.7);\n}\n',
  },
  {
    name: 'red/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $red: none)}\n',
  },
  {
    name: 'red/none/output.css',
    data: 'a {\n  b: color(srgb-linear none 0.5 0.7);\n}\n',
  },
  {
    name: 'green/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $green: 0.4)}\n',
  },
  {
    name: 'green/unitless/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.4 0.7);\n}\n',
  },
  {
    name: 'green/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $green: 40%)}\n',
  },
  {
    name: 'green/percent/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.4 0.7);\n}\n',
  },
  {
    name: 'green/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $green: -0.2)}\n',
  },
  {
    name: 'green/out_of_range/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 -0.2 0.7);\n}\n',
  },
  {
    name: 'green/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $green: none)}\n',
  },
  {
    name: 'green/none/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 none 0.7);\n}\n',
  },
  {
    name: 'blue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $blue: 0.5)}\n',
  },
  {
    name: 'blue/unitless/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.5 0.5);\n}\n',
  },
  {
    name: 'blue/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $blue: 50%)}\n',
  },
  {
    name: 'blue/percent/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.5 0.5);\n}\n',
  },
  {
    name: 'blue/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $blue: 100)}\n',
  },
  {
    name: 'blue/out_of_range/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.5 100);\n}\n',
  },
  {
    name: 'blue/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $blue: none)}\n',
  },
  {
    name: 'blue/none/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.5 none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $red: 0.7, $green: 0.4, $blue: 0.2)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: color(srgb-linear 0.7 0.4 0.2);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7 / 0.9), $red: 0.5)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: color(srgb-linear 0.5 0.5 0.7 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(srgb-linear 0.2 0.5 0.7), $red: 0.5, $alpha: 0.9)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: color(srgb-linear 0.5 0.5 0.7 / 0.9);\n}\n',
  },
]
