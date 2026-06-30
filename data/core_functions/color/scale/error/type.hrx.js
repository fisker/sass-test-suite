// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/error/type.hrx

export default [
  {
    name: 'color/input.scss',
    data: '@use "sass:color";\na {b: color.scale(1)}\n',
  },
  {
    name: 'color/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.scale(1)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'red/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $red: c)}\n',
  },
  {
    name: 'red/error',
    data: "Error: $red: c is not a number.\n  ,\n2 | a {b: color.scale(red, $red: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'green/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $green: c)}\n',
  },
  {
    name: 'green/error',
    data: "Error: $green: c is not a number.\n  ,\n2 | a {b: color.scale(red, $green: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'blue/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $blue: c)}\n',
  },
  {
    name: 'blue/error',
    data: "Error: $blue: c is not a number.\n  ,\n2 | a {b: color.scale(red, $blue: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'saturation/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $saturation: c)}\n',
  },
  {
    name: 'saturation/error',
    data: "Error: $saturation: c is not a number.\n  ,\n2 | a {b: color.scale(red, $saturation: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'lightness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $lightness: c)}\n',
  },
  {
    name: 'lightness/error',
    data: "Error: $lightness: c is not a number.\n  ,\n2 | a {b: color.scale(red, $lightness: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $alpha: c)}\n',
  },
  {
    name: 'alpha/error',
    data: "Error: $alpha: c is not a number.\n  ,\n2 | a {b: color.scale(red, $alpha: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'none/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $alpha: none)}\n',
  },
  {
    name: 'none/error',
    data: "Error: $alpha: none is not a number.\n  ,\n2 | a {b: color.scale(red, $alpha: none)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'blackness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $blackness: c)}\n',
  },
  {
    name: 'blackness/error',
    data: "Error: $blackness: c is not a number.\n  ,\n2 | a {b: color.scale(red, $blackness: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $whiteness: c)}\n',
  },
  {
    name: 'whiteness/error',
    data: "Error: $whiteness: c is not a number.\n  ,\n2 | a {b: color.scale(red, $whiteness: c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'space/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $space: 1)}\n',
  },
  {
    name: 'space/error',
    data: "Error: $space: 1 is not a string.\n  ,\n2 | a {b: color.scale(red, $space: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
