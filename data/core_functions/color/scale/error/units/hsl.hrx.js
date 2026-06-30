// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/error/units/hsl.hrx

export default [
  {
    name: 'none/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.scale(white, $saturation: 1)}\n',
  },
  {
    name: 'none/saturation/error',
    data: 'Error: $saturation: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(white, $saturation: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(white, $lightness: 1)}\n',
  },
  {
    name: 'none/lightness/error',
    data: 'Error: $lightness: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(white, $lightness: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.scale(white, $saturation: 1px)}\n',
  },
  {
    name: 'wrong/saturation/error',
    data: 'Error: $saturation: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(white, $saturation: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(white, $lightness: 1px)}\n',
  },
  {
    name: 'wrong/lightness/error',
    data: 'Error: $lightness: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(white, $lightness: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
