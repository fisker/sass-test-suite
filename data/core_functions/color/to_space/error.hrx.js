// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/error.hrx

export default [
  {
    name: 'undefined_space/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#abc, c)}\n',
  },
  {
    name: 'undefined_space/error',
    data: 'Error: $space: Unknown color space "c".\n  ,\n2 | a {b: color.to-space(#abc, c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'quoted_space/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#abc, "hsl")}\n',
  },
  {
    name: 'quoted_space/error',
    data: 'Error: $space: Expected "hsl" to be an unquoted string.\n  ,\n2 | a {b: color.to-space(#abc, "hsl")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#abc)}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $space.\n  ,--> input.scss\n2 | a {b: color.to-space(#abc)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function to-space($color, $space) {\n  |           ======================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#abc, rgb, hsl)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: color.to-space(#abc, rgb, hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function to-space($color, $space) {\n  |           ======================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/color/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(1, rgb)}\n',
  },
  {
    name: 'type/color/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.to-space(1, rgb)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/space/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#abc, #def)}\n',
  },
  {
    name: 'type/space/error',
    data: "Error: $space: #def is not a string.\n  ,\n2 | a {b: color.to-space(#abc, #def)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
