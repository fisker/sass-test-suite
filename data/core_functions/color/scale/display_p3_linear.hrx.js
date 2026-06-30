export default [
  {
    name: 'red/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: 100%)}\n',
  },
  {
    name: 'red/max/output.css',
    data: 'a {\n  b: color(display-p3-linear 1 0.5 0.7);\n}\n',
  },
  {
    name: 'red/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: -100%)}\n',
  },
  {
    name: 'red/min/output.css',
    data: 'a {\n  b: color(display-p3-linear 0 0.5 0.7);\n}\n',
  },
  {
    name: 'red/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: 0%)}\n',
  },
  {
    name: 'red/zero/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.5 0.7);\n}\n',
  },
  {
    name: 'red/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: -33%)}\n',
  },
  {
    name: 'red/low/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.134 0.5 0.7);\n}\n',
  },
  {
    name: 'red/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $red: 86%)}\n',
  },
  {
    name: 'red/high/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.888 0.5 0.7);\n}\n',
  },
  {
    name: 'green/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: 100%)}\n',
  },
  {
    name: 'green/max/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 1 0.7);\n}\n',
  },
  {
    name: 'green/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: -100%)}\n',
  },
  {
    name: 'green/min/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0 0.7);\n}\n',
  },
  {
    name: 'green/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: 0%)}\n',
  },
  {
    name: 'green/zero/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.5 0.7);\n}\n',
  },
  {
    name: 'green/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: -86%)}\n',
  },
  {
    name: 'green/low/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.07 0.7);\n}\n',
  },
  {
    name: 'green/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $green: 12%)}\n',
  },
  {
    name: 'green/high/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.56 0.7);\n}\n',
  },
  {
    name: 'blue/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: 100%)}\n',
  },
  {
    name: 'blue/max/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.5 1);\n}\n',
  },
  {
    name: 'blue/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: -100%)}\n',
  },
  {
    name: 'blue/min/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.5 0);\n}\n',
  },
  {
    name: 'blue/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: 0%)}\n',
  },
  {
    name: 'blue/zero/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.5 0.7);\n}\n',
  },
  {
    name: 'blue/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: -16%)}\n',
  },
  {
    name: 'blue/low/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.5 0.588);\n}\n',
  },
  {
    name: 'blue/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(display-p3-linear 0.2 0.5 0.7), $blue: 42%)}\n',
  },
  {
    name: 'blue/high/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2 0.5 0.826);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(\n    color(display-p3-linear 0.2 0.5 0.7), $red: 12%, $green: 24%, $blue: 48%\n  );\n}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.296 0.62 0.844);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(\n    color(display-p3-linear 0.2 0.5 0.7 / 0.3),\n    $red: 12%, $green: 24%, $blue: 48%\n  );\n}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.296 0.62 0.844 / 0.3);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(\n    color(display-p3-linear 0.2 0.5 0.7),\n    $red: 12%, $green: 24%, $blue: 48%, $alpha: -70%\n  );\n}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.296 0.62 0.844 / 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(\n    $color: color(display-p3-linear 0.2 0.5 0.7),\n    $red: 12%, $green: 24%, $blue: 48%\n  );\n}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.296 0.62 0.844);\n}\n',
  },
]
