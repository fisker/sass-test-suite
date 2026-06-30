export default [
  {
    name: 'hue/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 359)}\n',
  },
  {
    name: 'hue/max/output.css',
    data: 'a {\n  b: rgb(255, 0, 4.25);\n}\n',
  },
  {
    name: 'hue/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 540)}\n',
  },
  {
    name: 'hue/above_max/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'hue/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(blue, $hue: 0)}\n',
  },
  {
    name: 'hue/min/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'hue/negative/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: -60)}\n',
  },
  {
    name: 'hue/negative/output.css',
    data: 'a {\n  b: fuchsia;\n}\n',
  },
  {
    name: 'hue/middle/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 123)}\n',
  },
  {
    name: 'hue/middle/output.css',
    data: 'a {\n  b: rgb(0, 255, 12.75);\n}\n',
  },
  {
    name: 'hue/fraction/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 0.5)}\n',
  },
  {
    name: 'hue/fraction/output.css',
    data: 'a {\n  b: rgb(255, 2.125, 0);\n}\n',
  },
  {
    name: 'hue/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(hsl(0deg 100% 50%), $hue: none)}\n',
  },
  {
    name: 'hue/none/output.css',
    data: 'a {\n  b: hsl(none 100% 50%);\n}\n',
  },
  {
    name: 'saturation/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(plum, $saturation: 100%)}\n',
  },
  {
    name: 'saturation/max/output.css',
    data: 'a {\n  b: #ff7eff;\n}\n',
  },
  {
    name: 'saturation/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(plum, $saturation: 0%)}\n',
  },
  {
    name: 'saturation/min/output.css',
    data: 'a {\n  b: rgb(190.5, 190.5, 190.5);\n}\n',
  },
  {
    name: 'saturation/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(plum, $saturation: 76%)}\n',
  },
  {
    name: 'saturation/high/output.css',
    data: 'a {\n  b: rgb(239.52, 141.48, 239.52);\n}\n',
  },
  {
    name: 'saturation/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(plum, $saturation: 14%)}\n',
  },
  {
    name: 'saturation/low/output.css',
    data: 'a {\n  b: rgb(199.53, 181.47, 199.53);\n}\n',
  },
  {
    name: 'saturation/above_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(plum, $saturation: 120%)}\n',
  },
  {
    name: 'saturation/above_range/output.css',
    data: 'a {\n  b: hsl(300, 120%, 74.7058823529%);\n}\n',
  },
  {
    name: 'saturation/below_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(plum, $saturation: -20%)}\n',
  },
  {
    name: 'saturation/below_range/output.css',
    data: 'a {\n  b: rgb(177.6, 203.4, 177.6);\n}\n',
  },
  {
    name: 'saturation/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(hsl(0deg 100% 50%), $saturation: none)}\n',
  },
  {
    name: 'saturation/none/output.css',
    data: 'a {\n  b: hsl(0deg none 50%);\n}\n',
  },
  {
    name: 'lightness/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 100%)}\n',
  },
  {
    name: 'lightness/max/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'lightness/fraction/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 0.5%)}\n',
  },
  {
    name: 'lightness/fraction/output.css',
    data: 'a {\n  b: rgb(2.55, 0, 0);\n}\n',
  },
  {
    name: 'lightness/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 0%)}\n',
  },
  {
    name: 'lightness/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'lightness/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 63%)}\n',
  },
  {
    name: 'lightness/high/output.css',
    data: 'a {\n  b: rgb(255, 66.3, 66.3);\n}\n',
  },
  {
    name: 'lightness/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 27%)}\n',
  },
  {
    name: 'lightness/low/output.css',
    data: 'a {\n  b: rgb(137.7, 0, 0);\n}\n',
  },
  {
    name: 'lightness/above_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 120%)}\n',
  },
  {
    name: 'lightness/above_range/output.css',
    data: 'a {\n  b: hsl(0, 100%, 120%);\n}\n',
  },
  {
    name: 'lightness/below_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: -20%)}\n',
  },
  {
    name: 'lightness/below_range/output.css',
    data: 'a {\n  b: hsl(0, 100%, -20%);\n}\n',
  },
  {
    name: 'lightness/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(hsl(0deg 100% 50%), $lightness: none)}\n',
  },
  {
    name: 'lightness/none/output.css',
    data: 'a {\n  b: hsl(0deg 100% none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $hue: 12, $saturation: 24%, $lightness: 48%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: rgb(151.776, 104.7744, 93.024);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgba(black, 0.7), $hue: 12, $saturation: 24%, $lightness: 48%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(151.776, 104.7744, 93.024, 0.7);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $hue: 12, $saturation: 24%, $lightness: 48%, $alpha: 0.7)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(151.776, 104.7744, 93.024, 0.7);\n}\n',
  },
  {
    name: 'units/hue/deg/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 60deg)}\n',
  },
  {
    name: 'units/hue/deg/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'units/hue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 60)}\n',
  },
  {
    name: 'units/hue/unitless/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'units/hue/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 60in)}\n',
  },
  {
    name: 'units/hue/unknown/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'units/hue/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $hue: Passing a unit other than deg (60in) is deprecated.\n\nTo preserve current behavior: calc($hue / 1in)\n\nSee https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.change(red, $hue: 60in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'units/hue/angle/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $hue: 60rad)}\n',
  },
  {
    name: 'units/hue/angle/output.css',
    data: 'a {\n  b: rgb(0, 179.576224164, 255);\n}\n',
  },
  {
    name: 'units/saturation/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $saturation: 50%)}\n',
  },
  {
    name: 'units/saturation/percent/output.css',
    data: 'a {\n  b: rgb(191.25, 63.75, 63.75);\n}\n',
  },
  {
    name: 'units/saturation/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $saturation: 50)}\n',
  },
  {
    name: 'units/saturation/unitless/output.css',
    data: 'a {\n  b: rgb(191.25, 63.75, 63.75);\n}\n',
  },
  {
    name: 'units/saturation/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (50) is deprecated.\n\nTo preserve current behavior: $saturation * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.change(red, $saturation: 50)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'units/saturation/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $saturation: 50in)}\n',
  },
  {
    name: 'units/saturation/unknown/output.css',
    data: 'a {\n  b: rgb(191.25, 63.75, 63.75);\n}\n',
  },
  {
    name: 'units/saturation/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (50in) is deprecated.\n\nTo preserve current behavior: calc($saturation / 1in * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.change(red, $saturation: 50in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'units/lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 30%)}\n',
  },
  {
    name: 'units/lightness/percent/output.css',
    data: 'a {\n  b: #990000;\n}\n',
  },
  {
    name: 'units/lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 30)}\n',
  },
  {
    name: 'units/lightness/unitless/output.css',
    data: 'a {\n  b: #990000;\n}\n',
  },
  {
    name: 'units/lightness/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (30) is deprecated.\n\nTo preserve current behavior: $lightness * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.change(red, $lightness: 30)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'units/lightness/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $lightness: 30in)}\n',
  },
  {
    name: 'units/lightness/unknown/output.css',
    data: 'a {\n  b: #990000;\n}\n',
  },
  {
    name: 'units/lightness/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (30in) is deprecated.\n\nTo preserve current behavior: calc($lightness / 1in * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.change(red, $lightness: 30in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.change($color: black, $hue: 12, $saturation: 24%, $lightness: 48%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(151.776, 104.7744, 93.024);\n}\n',
  },
]
