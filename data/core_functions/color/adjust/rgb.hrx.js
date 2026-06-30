// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/rgb.hrx

export default [
  {
    name: 'red/max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $red: 255)}\n',
  },
  {
    name: 'red/max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'red/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $red: -255)}\n',
  },
  {
    name: 'red/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'red/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $red: 0)}\n',
  },
  {
    name: 'red/zero/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'red/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $red: -100)}\n',
  },
  {
    name: 'red/low/output.css',
    data: 'a {\n  b: #9b0000;\n}\n',
  },
  {
    name: 'red/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $red: 200)}\n',
  },
  {
    name: 'red/high/output.css',
    data: 'a {\n  b: #c80000;\n}\n',
  },
  {
    name: 'red/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $red: 200)}\n',
  },
  {
    name: 'red/above_max/output.css',
    data: 'a {\n  b: #ffcdef;\n}\n',
  },
  {
    name: 'red/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $red: -200)}\n',
  },
  {
    name: 'red/below_min/output.css',
    data: 'a {\n  b: #00cdef;\n}\n',
  },
  {
    name: 'red/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $red: 500)}\n',
  },
  {
    name: 'red/arg_above_max/output.css',
    data: 'a {\n  b: #ffcdef;\n}\n',
  },
  {
    name: 'red/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $red: -500)}\n',
  },
  {
    name: 'red/arg_below_min/output.css',
    data: 'a {\n  b: #00cdef;\n}\n',
  },
  {
    name: 'green/max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $green: 255)}\n',
  },
  {
    name: 'green/max/output.css',
    data: 'a {\n  b: lime;\n}\n',
  },
  {
    name: 'green/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lime, $green: -255)}\n',
  },
  {
    name: 'green/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'green/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $green: 0)}\n',
  },
  {
    name: 'green/zero/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'green/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(lime, $green: -100)}\n',
  },
  {
    name: 'green/low/output.css',
    data: 'a {\n  b: #009b00;\n}\n',
  },
  {
    name: 'green/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $green: 200)}\n',
  },
  {
    name: 'green/high/output.css',
    data: 'a {\n  b: #00c800;\n}\n',
  },
  {
    name: 'green/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $green: 200)}\n',
  },
  {
    name: 'green/above_max/output.css',
    data: 'a {\n  b: #abffef;\n}\n',
  },
  {
    name: 'green/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $green: -210)}\n',
  },
  {
    name: 'green/below_min/output.css',
    data: 'a {\n  b: #ab00ef;\n}\n',
  },
  {
    name: 'green/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $green: 500)}\n',
  },
  {
    name: 'green/arg_above_max/output.css',
    data: 'a {\n  b: #abffef;\n}\n',
  },
  {
    name: 'green/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $green: -500)}\n',
  },
  {
    name: 'green/arg_below_min/output.css',
    data: 'a {\n  b: #ab00ef;\n}\n',
  },
  {
    name: 'blue/max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $blue: 255)}\n',
  },
  {
    name: 'blue/max/output.css',
    data: 'a {\n  b: blue;\n}\n',
  },
  {
    name: 'blue/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(blue, $blue: -255)}\n',
  },
  {
    name: 'blue/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'blue/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $blue: 0)}\n',
  },
  {
    name: 'blue/zero/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'blue/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(blue, $blue: -100)}\n',
  },
  {
    name: 'blue/low/output.css',
    data: 'a {\n  b: #00009b;\n}\n',
  },
  {
    name: 'blue/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $blue: 200)}\n',
  },
  {
    name: 'blue/high/output.css',
    data: 'a {\n  b: #0000c8;\n}\n',
  },
  {
    name: 'blue/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#fedcba, $blue: 200)}\n',
  },
  {
    name: 'blue/above_max/output.css',
    data: 'a {\n  b: #fedcff;\n}\n',
  },
  {
    name: 'blue/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#fedcba, $blue: -200)}\n',
  },
  {
    name: 'blue/below_min/output.css',
    data: 'a {\n  b: #fedc00;\n}\n',
  },
  {
    name: 'blue/arg_above_max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#fedcba, $blue: 500)}\n',
  },
  {
    name: 'blue/arg_above_max/output.css',
    data: 'a {\n  b: #fedcff;\n}\n',
  },
  {
    name: 'blue/arg_below_min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#fedcba, $blue: -500)}\n',
  },
  {
    name: 'blue/arg_below_min/output.css',
    data: 'a {\n  b: #fedc00;\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $red: 12, $green: 24, $blue: 48)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: #0c1830;\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(black, 0.3), $red: 12, $green: 24, $blue: 48)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(12, 24, 48, 0.3);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(black, $red: 12, $green: 24, $blue: 48, $alpha: -0.3)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(12, 24, 48, 0.7);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.adjust($color: black, $red: 12, $green: 24, $blue: 48)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: #0c1830;\n}\n',
  },
]
