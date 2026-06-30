export default [
  {
    name: 'x/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $x: 0.5)}\n',
  },
  {
    name: 'x/unitless/output.css',
    data: 'a {\n  b: color(xyz 0.5 0.5 0.7);\n}\n',
  },
  {
    name: 'x/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $x: 50%)}\n',
  },
  {
    name: 'x/percent/output.css',
    data: 'a {\n  b: color(xyz 0.5 0.5 0.7);\n}\n',
  },
  {
    name: 'x/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $x: 1.2)}\n',
  },
  {
    name: 'x/out_of_range/output.css',
    data: 'a {\n  b: color(xyz 1.2 0.5 0.7);\n}\n',
  },
  {
    name: 'x/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $x: none)}\n',
  },
  {
    name: 'x/none/output.css',
    data: 'a {\n  b: color(xyz none 0.5 0.7);\n}\n',
  },
  {
    name: 'y/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $y: 0.4)}\n',
  },
  {
    name: 'y/unitless/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.4 0.7);\n}\n',
  },
  {
    name: 'y/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $y: 40%)}\n',
  },
  {
    name: 'y/percent/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.4 0.7);\n}\n',
  },
  {
    name: 'y/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $y: -0.2)}\n',
  },
  {
    name: 'y/out_of_range/output.css',
    data: 'a {\n  b: color(xyz 0.2 -0.2 0.7);\n}\n',
  },
  {
    name: 'y/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $y: none)}\n',
  },
  {
    name: 'y/none/output.css',
    data: 'a {\n  b: color(xyz 0.2 none 0.7);\n}\n',
  },
  {
    name: 'z/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $z: 0.5)}\n',
  },
  {
    name: 'z/unitless/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0.5);\n}\n',
  },
  {
    name: 'z/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $z: 50%)}\n',
  },
  {
    name: 'z/percent/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0.5);\n}\n',
  },
  {
    name: 'z/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $z: 100)}\n',
  },
  {
    name: 'z/out_of_range/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 100);\n}\n',
  },
  {
    name: 'z/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $z: none)}\n',
  },
  {
    name: 'z/none/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $x: 0.7, $y: 0.4, $z: 0.2)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: color(xyz 0.7 0.4 0.2);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7 / 0.9), $x: 0.5)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: color(xyz 0.5 0.5 0.7 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(color(xyz 0.2 0.5 0.7), $x: 0.5, $alpha: 0.9)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: color(xyz 0.5 0.5 0.7 / 0.9);\n}\n',
  },
]
