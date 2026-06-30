// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/error/space.hrx

export default [
  {
    name: 'unknown/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $space: c)}\n',
  },
  {
    name: 'unknown/error',
    data: 'Error: $space: Unknown color space "c".\n  ,\n2 | a {b: color.adjust(red, $space: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'quoted/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $space: "lab")}\n',
  },
  {
    name: 'quoted/error',
    data: 'Error: $space: Expected "lab" to be an unquoted string.\n  ,\n2 | a {b: color.adjust(red, $space: "lab")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
