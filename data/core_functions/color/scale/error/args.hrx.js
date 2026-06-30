// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/error/args.hrx

export default [
  {
    name: 'too_few/input.scss',
    data: '@use "sass:color";\na {b: color.scale()}\n',
  },
  {
    name: 'too_few/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.scale()}\n  |       ^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function scale($color, $kwargs...) {\n  |           ========================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, 1)}\n',
  },
  {
    name: 'too_many/error',
    data: "Error: Only one positional argument is allowed. All other arguments must be passed by name.\n  ,\n2 | a {b: color.scale(red, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'unknown/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $hue: 10%)}\n',
  },
  {
    name: 'unknown/error',
    data: "Error: $hue: Channel isn't scalable.\n  ,\n2 | a {b: color.scale(red, $hue: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'wrong_name/input.scss',
    data: '@use "sass:color";\na {b: color.scale-color(#abcdef, $red: 10%)}\n',
  },
  {
    name: 'wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: color.scale-color(#abcdef, $red: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
