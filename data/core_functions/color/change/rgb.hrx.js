export default [
  {
    name: 'red/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $red: 255)}\n',
  },
  {
    name: 'red/max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'red/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $red: 0)}\n',
  },
  {
    name: 'red/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'red/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $red: 100)}\n',
  },
  {
    name: 'red/low/output.css',
    data: 'a {\n  b: #640000;\n}\n',
  },
  {
    name: 'red/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $red: 200)}\n',
  },
  {
    name: 'red/high/output.css',
    data: 'a {\n  b: #c80000;\n}\n',
  },
  {
    name: 'red/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $red: 500)}\n',
  },
  {
    name: 'red/out_of_range/output.css',
    data: 'a {\n  b: hsl(0, 5000%, 98.0392156863%);\n}\n',
  },
  {
    name: 'red/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $red: none)}\n',
  },
  {
    name: 'red/none/output.css',
    data: 'a {\n  b: rgb(none 0 0);\n}\n',
  },
  {
    name: 'green/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $green: 255)}\n',
  },
  {
    name: 'green/max/output.css',
    data: 'a {\n  b: lime;\n}\n',
  },
  {
    name: 'green/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(lime, $green: 0)}\n',
  },
  {
    name: 'green/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'green/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(lime, $green: 100)}\n',
  },
  {
    name: 'green/low/output.css',
    data: 'a {\n  b: darkgreen;\n}\n',
  },
  {
    name: 'green/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $green: 200)}\n',
  },
  {
    name: 'green/high/output.css',
    data: 'a {\n  b: #00c800;\n}\n',
  },
  {
    name: 'green/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $green: -50)}\n',
  },
  {
    name: 'green/out_of_range/output.css',
    data: 'a {\n  b: hsl(120, 100%, -9.8039215686%);\n}\n',
  },
  {
    name: 'green/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $green: none)}\n',
  },
  {
    name: 'green/none/output.css',
    data: 'a {\n  b: rgb(0 none 0);\n}\n',
  },
  {
    name: 'blue/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $blue: 255)}\n',
  },
  {
    name: 'blue/max/output.css',
    data: 'a {\n  b: blue;\n}\n',
  },
  {
    name: 'blue/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(blue, $blue: 0)}\n',
  },
  {
    name: 'blue/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'blue/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(blue, $blue: 100)}\n',
  },
  {
    name: 'blue/low/output.css',
    data: 'a {\n  b: #000064;\n}\n',
  },
  {
    name: 'blue/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $blue: 200)}\n',
  },
  {
    name: 'blue/high/output.css',
    data: 'a {\n  b: #0000c8;\n}\n',
  },
  {
    name: 'blue/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $blue: 256)}\n',
  },
  {
    name: 'blue/out_of_range/output.css',
    data: 'a {\n  b: hsl(240, 100.7874015748%, 50.1960784314%);\n}\n',
  },
  {
    name: 'blue/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $blue: none)}\n',
  },
  {
    name: 'blue/none/output.css',
    data: 'a {\n  b: rgb(0 0 none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $red: 12, $green: 24, $blue: 48)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: #0c1830;\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgba(black, 0.3), $red: 12, $green: 24, $blue: 48)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(12, 24, 48, 0.3);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(black, $red: 12, $green: 24, $blue: 48, $alpha: 0.3)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(12, 24, 48, 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.change($color: black, $red: 12, $green: 24, $blue: 48)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: #0c1830;\n}\n',
  },
]
