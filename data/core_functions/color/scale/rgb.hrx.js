// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/rgb.hrx

export default [
  {
    name: 'red/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(black, $red: 100%)}\n',
  },
  {
    name: 'red/max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'red/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $red: -100%)}\n',
  },
  {
    name: 'red/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'red/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(black, $red: 0%)}\n',
  },
  {
    name: 'red/zero/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'red/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lightcoral, $red: -33%)}\n',
  },
  {
    name: 'red/low/output.css',
    data: 'a {\n  b: rgb(160.8, 128, 128);\n}\n',
  },
  {
    name: 'red/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(turquoise, $red: 86%)}\n',
  },
  {
    name: 'red/high/output.css',
    data: 'a {\n  b: rgb(228.26, 224, 208);\n}\n',
  },
  {
    name: 'green/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(black, $green: 100%)}\n',
  },
  {
    name: 'green/max/output.css',
    data: 'a {\n  b: lime;\n}\n',
  },
  {
    name: 'green/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lime, $green: -100%)}\n',
  },
  {
    name: 'green/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'green/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(black, $green: 0%)}\n',
  },
  {
    name: 'green/zero/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'green/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(seagreen, $green: -86%)}\n',
  },
  {
    name: 'green/low/output.css',
    data: 'a {\n  b: rgb(46, 19.46, 87);\n}\n',
  },
  {
    name: 'green/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(cadetblue, $green: 12%)}\n',
  },
  {
    name: 'green/high/output.css',
    data: 'a {\n  b: rgb(95, 169.64, 160);\n}\n',
  },
  {
    name: 'blue/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(black, $blue: 100%)}\n',
  },
  {
    name: 'blue/max/output.css',
    data: 'a {\n  b: blue;\n}\n',
  },
  {
    name: 'blue/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(blue, $blue: -100%)}\n',
  },
  {
    name: 'blue/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'blue/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(black, $blue: 0%)}\n',
  },
  {
    name: 'blue/zero/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'blue/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(slategray, $blue: -16%)}\n',
  },
  {
    name: 'blue/low/output.css',
    data: 'a {\n  b: rgb(112, 128, 120.96);\n}\n',
  },
  {
    name: 'blue/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(salmon, $blue: 42%)}\n',
  },
  {
    name: 'blue/high/output.css',
    data: 'a {\n  b: rgb(250, 128, 173.22);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.scale(sienna, $red: 12%, $green: 24%, $blue: 48%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: rgb(171.4, 123.52, 145.8);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(sienna, 0.3), $red: 12%, $green: 24%, $blue: 48%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(171.4, 123.52, 145.8, 0.3);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.scale(sienna, $red: 12%, $green: 24%, $blue: 48%, $alpha: -70%)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(171.4, 123.52, 145.8, 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.scale($color: sienna, $red: 12%, $green: 24%, $blue: 48%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(171.4, 123.52, 145.8);\n}\n',
  },
]
