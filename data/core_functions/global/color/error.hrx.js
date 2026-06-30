// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/error.hrx

export default [
  {
    name: 'too_low/lighten/input.scss',
    data: 'a {b: lighten(red, -0.001)}\n',
  },
  {
    name: 'too_low/lighten/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 100.\n  ,\n1 | a {b: lighten(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_low/darken/input.scss',
    data: 'a {b: darken(red, -0.001)}\n',
  },
  {
    name: 'too_low/darken/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: darken(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 100.\n  ,\n1 | a {b: darken(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_low/saturate/input.scss',
    data: 'a {b: saturate(red, -0.001)}\n',
  },
  {
    name: 'too_low/saturate/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 100.\n  ,\n1 | a {b: saturate(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_low/desaturate/input.scss',
    data: 'a {b: desaturate(red, -0.001)}\n',
  },
  {
    name: 'too_low/desaturate/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: desaturate(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 100.\n  ,\n1 | a {b: desaturate(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_low/fade_in/input.scss',
    data: 'a {b: fade-in(red, -0.001)}\n',
  },
  {
    name: 'too_low/fade_in/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 1.\n  ,\n1 | a {b: fade-in(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_low/fade_out/input.scss',
    data: 'a {b: fade-out(red, -0.001)}\n',
  },
  {
    name: 'too_low/fade_out/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-out(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 1.\n  ,\n1 | a {b: fade-out(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
