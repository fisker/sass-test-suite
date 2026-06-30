// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/error/units/oklab.hrx

export default [
  {
    name: 'none/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(50% 40% -20%), $lightness: 1)}\n',
  },
  {
    name: 'none/lightness/error',
    data: 'Error: $lightness: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(oklab(50% 40% -20%), $lightness: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/a/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(50% 40% -20%), $a: 1)}\n',
  },
  {
    name: 'none/a/error',
    data: 'Error: $a: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(oklab(50% 40% -20%), $a: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'none/b/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(50% 40% -20%), $b: 1)}\n',
  },
  {
    name: 'none/b/error',
    data: 'Error: $b: Expected 1 to have unit "%".\n  ,\n2 | a {b: color.scale(oklab(50% 40% -20%), $b: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(50% 40% -20%), $lightness: 1px)}\n',
  },
  {
    name: 'wrong/lightness/error',
    data: 'Error: $lightness: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(oklab(50% 40% -20%), $lightness: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/a/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(50% 40% -20%), $a: 1px)}\n',
  },
  {
    name: 'wrong/a/error',
    data: 'Error: $a: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(oklab(50% 40% -20%), $a: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong/b/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(50% 40% -20%), $b: 1px)}\n',
  },
  {
    name: 'wrong/b/error',
    data: 'Error: $b: Expected 1px to have unit "%".\n  ,\n2 | a {b: color.scale(oklab(50% 40% -20%), $b: 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
