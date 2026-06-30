export default [
  {
    name: 'hue/deg/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0deg, 30%, 40%)}\n',
  },
  {
    name: 'hue/deg/output.css',
    data: 'a {\n  b: hsl(0, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'hue/rad/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(1rad, 30%, 40%)}\n',
  },
  {
    name: 'hue/rad/output.css',
    data: 'a {\n  b: hsl(57.2957795131, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'hue/non_angle/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(1in, 30%, 40%)}\n',
  },
  {
    name: 'hue/non_angle/output.css',
    data: 'a {\n  b: hsl(1, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'hue/non_angle/warning',
    data: "DEPRECATION WARNING [function-units]: $hue: Passing a unit other than deg (1in) is deprecated.\n\nTo preserve current behavior: calc($hue / 1in)\n\nSee https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.hwb(1in, 30%, 40%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
]
