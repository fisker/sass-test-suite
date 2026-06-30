export default [
  {
    name: 'too_few_args/input.scss',
    data: 'a {b: adjust-hue(red)}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $degrees.\n  ,--> input.scss\n1 | a {b: adjust-hue(red)}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function adjust-hue($color, $degrees) {\n  |           ============================ declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: 'a {b: adjust-hue(red, 1, 2)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n1 | a {b: adjust-hue(red, 1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function adjust-hue($color, $degrees) {\n  |           ============================ declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/color/input.scss',
    data: 'a {b: adjust-hue(1, 2)}\n',
  },
  {
    name: 'type/color/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(1, 2)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color: 1 is not a color.\n  ,\n1 | a {b: adjust-hue(1, 2)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'type/hue/input.scss',
    data: 'a {b: adjust-hue(red, blue)}\n',
  },
  {
    name: 'type/hue/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(red, blue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $degrees: blue is not a number.\n  ,\n1 | a {b: adjust-hue(red, blue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'non_legacy/input.scss',
    data: 'a {b: adjust-hue(lch(0% 0 0deg), 10deg)}\n',
  },
  {
    name: 'non_legacy/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: adjust-hue(lch(0% 0 0deg), 10deg)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: adjust-hue() is only supported for legacy colors. Please use color.adjust() instead with an explicit $space argument.\n  ,\n1 | a {b: adjust-hue(lch(0% 0 0deg), 10deg)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
