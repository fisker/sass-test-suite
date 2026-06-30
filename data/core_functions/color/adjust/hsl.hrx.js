// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/hsl.hrx

export default [
  {
    name: 'hue/max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 359)}\n',
  },
  {
    name: 'hue/max/output.css',
    data: 'a {\n  b: rgb(255, 0, 4.25);\n}\n',
  },
  {
    name: 'hue/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 540)}\n',
  },
  {
    name: 'hue/arg_above_max/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'hue/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(blue, $hue: 0)}\n',
  },
  {
    name: 'hue/min/output.css',
    data: 'a {\n  b: blue;\n}\n',
  },
  {
    name: 'hue/negative/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: -180)}\n',
  },
  {
    name: 'hue/negative/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'hue/middle/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 123)}\n',
  },
  {
    name: 'hue/middle/output.css',
    data: 'a {\n  b: rgb(0, 255, 12.75);\n}\n',
  },
  {
    name: 'hue/fraction/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 0.5)}\n',
  },
  {
    name: 'hue/fraction/output.css',
    data: 'a {\n  b: rgb(255, 2.125, 0);\n}\n',
  },
  {
    name: 'saturation/max_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: 53%)}\n',
  },
  {
    name: 'saturation/max_remaining/output.css',
    data: 'a {\n  b: hsl(300, 100.2868217054%, 74.7058823529%);\n}\n',
  },
  {
    name: 'saturation/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: 0%)}\n',
  },
  {
    name: 'saturation/zero/output.css',
    data: 'a {\n  b: plum;\n}\n',
  },
  {
    name: 'saturation/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: -100%)}\n',
  },
  {
    name: 'saturation/min/output.css',
    data: 'a {\n  b: rgb(190.5, 190.5, 190.5);\n}\n',
  },
  {
    name: 'saturation/min_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: -48%)}\n',
  },
  {
    name: 'saturation/min_remaining/output.css',
    data: 'a {\n  b: rgb(190.5, 190.5, 190.5);\n}\n',
  },
  {
    name: 'saturation/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: 14%)}\n',
  },
  {
    name: 'saturation/high/output.css',
    data: 'a {\n  b: rgb(230.03, 150.97, 230.03);\n}\n',
  },
  {
    name: 'saturation/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: -14%)}\n',
  },
  {
    name: 'saturation/low/output.css',
    data: 'a {\n  b: rgb(211.97, 169.03, 211.97);\n}\n',
  },
  {
    name: 'saturation/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: 100%)}\n',
  },
  {
    name: 'saturation/above_max/output.css',
    data: 'a {\n  b: hsl(300, 147.2868217054%, 74.7058823529%);\n}\n',
  },
  {
    name: 'saturation/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: -100%)}\n',
  },
  {
    name: 'saturation/below_min/output.css',
    data: 'a {\n  b: rgb(190.5, 190.5, 190.5);\n}\n',
  },
  {
    name: 'saturation/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: 200%)}\n',
  },
  {
    name: 'saturation/arg_above_max/output.css',
    data: 'a {\n  b: hsl(300, 247.2868217054%, 74.7058823529%);\n}\n',
  },
  {
    name: 'saturation/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $saturation: -200%)}\n',
  },
  {
    name: 'saturation/arg_below_min/output.css',
    data: 'a {\n  b: rgb(190.5, 190.5, 190.5);\n}\n',
  },
  {
    name: 'lightness/max_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 50%)}\n',
  },
  {
    name: 'lightness/max_remaining/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'lightness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 0%)}\n',
  },
  {
    name: 'lightness/zero/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'lightness/fraction/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 0.5%)}\n',
  },
  {
    name: 'lightness/fraction/output.css',
    data: 'a {\n  b: rgb(255, 2.55, 2.55);\n}\n',
  },
  {
    name: 'lightness/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: -100%)}\n',
  },
  {
    name: 'lightness/min/output.css',
    data: 'a {\n  b: hsl(0, 100%, -50%);\n}\n',
  },
  {
    name: 'lightness/min_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: -50%)}\n',
  },
  {
    name: 'lightness/min_remaining/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'lightness/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 14%)}\n',
  },
  {
    name: 'lightness/high/output.css',
    data: 'a {\n  b: rgb(255, 71.4, 71.4);\n}\n',
  },
  {
    name: 'lightness/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: -14%)}\n',
  },
  {
    name: 'lightness/low/output.css',
    data: 'a {\n  b: rgb(183.6, 0, 0);\n}\n',
  },
  {
    name: 'lightness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 100%)}\n',
  },
  {
    name: 'lightness/above_max/output.css',
    data: 'a {\n  b: hsl(0, 100%, 150%);\n}\n',
  },
  {
    name: 'lightness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $lightness: -100%)}\n',
  },
  {
    name: 'lightness/below_min/output.css',
    data: 'a {\n  b: hsl(300, 47.2868217054%, -25.2941176471%);\n}\n',
  },
  {
    name: 'lightness/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 200%)}\n',
  },
  {
    name: 'lightness/arg_above_max/output.css',
    data: 'a {\n  b: hsl(0, 100%, 250%);\n}\n',
  },
  {
    name: 'lightness/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(plum, $lightness: -200%)}\n',
  },
  {
    name: 'lightness/arg_below_min/output.css',
    data: 'a {\n  b: hsl(300, 47.2868217054%, -125.2941176471%);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $hue: 12, $saturation: 24%, $lightness: 48%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: rgb(151.776, 104.7744, 93.024);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {\n  b: color.adjust(\n    rgba(black, 0.7),\n    $hue: 12,\n    $saturation: 24%,\n    $lightness: 48%\n  );\n}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(151.776, 104.7744, 93.024, 0.7);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {\n  b: color.adjust(\n    black,\n    $hue: 12,\n    $saturation: 24%,\n    $lightness: 48%,\n    $alpha: -0.7\n  );\n}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(151.776, 104.7744, 93.024, 0.3);\n}\n',
  },
  {
    name: 'alpha_arg_above_max/input.scss',
    data: '// Regression test for sass/dart-sass#708.\n@use "sass:color";\na {\n  b: color.adjust(\n    black,\n    $hue: 12,\n    $saturation: 24%,\n    $lightness: 48%,\n    $alpha: 0.7\n  );\n}\n',
  },
  {
    name: 'alpha_arg_above_max/output.css',
    data: 'a {\n  b: rgb(151.776, 104.7744, 93.024);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.adjust($color: black, $hue: 12, $saturation: 24%, $lightness: 48%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(151.776, 104.7744, 93.024);\n}\n',
  },
]
