export default [
  {
    name: 'hue/deg/input.scss',
    data: 'a {b: hsl(0deg, 100%, 50%)}\n',
  },
  {
    name: 'hue/deg/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'hue/unitless/input.scss',
    data: 'a {b: hsl(60, 100%, 50%)}\n',
  },
  {
    name: 'hue/unitless/output.css',
    data: 'a {\n  b: hsl(60, 100%, 50%);\n}\n',
  },
  {
    name: 'hue/unknown/input.scss',
    data: 'a {b: hsl(60in, 100%, 50%)}\n',
  },
  {
    name: 'hue/unknown/output.css',
    data: 'a {\n  b: hsl(60, 100%, 50%);\n}\n',
  },
  {
    name: 'hue/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $hue: Passing a unit other than deg (60in) is deprecated.\n\nTo preserve current behavior: calc($hue / 1in)\n\nSee https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(60in, 100%, 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'hue/angle/input.scss',
    data: 'a {b: hsl(60rad, 100%, 50%)}\n',
  },
  {
    name: 'hue/angle/output.css',
    data: 'a {\n  b: hsl(197.7467707849, 100%, 50%);\n}\n',
  },
  {
    name: 'saturation/unitless/input.scss',
    data: 'a {b: hsl(0, 50, 50%)}\n',
  },
  {
    name: 'saturation/unitless/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'saturation/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (50) is deprecated.\n\nTo preserve current behavior: $saturation * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, 50, 50%)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'saturation/unknown/input.scss',
    data: 'a {b: hsl(0, 50in, 50%)}\n',
  },
  {
    name: 'saturation/unknown/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'saturation/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (50in) is deprecated.\n\nTo preserve current behavior: calc($saturation / 1in * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, 50in, 50%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'lightness/unitless/input.scss',
    data: 'a {b: hsl(0, 100%, 50)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'lightness/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (50) is deprecated.\n\nTo preserve current behavior: $lightness * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, 100%, 50)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'lightness/unknown/input.scss',
    data: 'a {b: hsl(0, 100%, 50in)}\n',
  },
  {
    name: 'lightness/unknown/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'lightness/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (50in) is deprecated.\n\nTo preserve current behavior: calc($lightness / 1in * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, 100%, 50in)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
