// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/xyz_d65.hrx

export default [
  {
    name: 'x/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 100%)}\n',
  },
  {
    name: 'x/max/output.css',
    data: 'a {\n  b: color(xyz 1 0.5 0.7);\n}\n',
  },
  {
    name: 'x/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: -100%)}\n',
  },
  {
    name: 'x/min/output.css',
    data: 'a {\n  b: color(xyz 0 0.5 0.7);\n}\n',
  },
  {
    name: 'x/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 0%)}\n',
  },
  {
    name: 'x/zero/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0.7);\n}\n',
  },
  {
    name: 'x/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: -33%)}\n',
  },
  {
    name: 'x/low/output.css',
    data: 'a {\n  b: color(xyz 0.134 0.5 0.7);\n}\n',
  },
  {
    name: 'x/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 86%)}\n',
  },
  {
    name: 'x/high/output.css',
    data: 'a {\n  b: color(xyz 0.888 0.5 0.7);\n}\n',
  },
  {
    name: 'y/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: 100%)}\n',
  },
  {
    name: 'y/max/output.css',
    data: 'a {\n  b: color(xyz 0.2 1 0.7);\n}\n',
  },
  {
    name: 'y/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: -100%)}\n',
  },
  {
    name: 'y/min/output.css',
    data: 'a {\n  b: color(xyz 0.2 0 0.7);\n}\n',
  },
  {
    name: 'y/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: 0%)}\n',
  },
  {
    name: 'y/zero/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0.7);\n}\n',
  },
  {
    name: 'y/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: -86%)}\n',
  },
  {
    name: 'y/low/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.07 0.7);\n}\n',
  },
  {
    name: 'y/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $y: 12%)}\n',
  },
  {
    name: 'y/high/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.56 0.7);\n}\n',
  },
  {
    name: 'z/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: 100%)}\n',
  },
  {
    name: 'z/max/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 1);\n}\n',
  },
  {
    name: 'z/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: -100%)}\n',
  },
  {
    name: 'z/min/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0);\n}\n',
  },
  {
    name: 'z/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: 0%)}\n',
  },
  {
    name: 'z/zero/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0.7);\n}\n',
  },
  {
    name: 'z/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: -16%)}\n',
  },
  {
    name: 'z/low/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0.588);\n}\n',
  },
  {
    name: 'z/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(xyz-d65 0.2 0.5 0.7), $z: 42%)}\n',
  },
  {
    name: 'z/high/output.css',
    data: 'a {\n  b: color(xyz 0.2 0.5 0.826);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(color(xyz-d65 0.2 0.5 0.7), $x: 12%, $y: 24%, $z: 48%);\n}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: color(xyz 0.296 0.62 0.844);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(color(xyz-d65 0.2 0.5 0.7 / 0.3), $x: 12%, $y: 24%, $z: 48%);\n}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: color(xyz 0.296 0.62 0.844 / 0.3);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(\n    color(xyz-d65 0.2 0.5 0.7),\n    $x: 12%, $y: 24%, $z: 48%, $alpha: -70%\n  );\n}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: color(xyz 0.296 0.62 0.844 / 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale($color: color(xyz-d65 0.2 0.5 0.7), $x: 12%, $y: 24%, $z: 48%);\n}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: color(xyz 0.296 0.62 0.844);\n}\n',
  },
]
