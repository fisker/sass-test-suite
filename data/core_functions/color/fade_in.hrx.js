// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/fade_in.hrx

export default [
  {
    name: 'max/input.scss',
    data: 'a {b: fade-in(rgba(red, 0.5), 1)}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'max/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: fade-in() is deprecated. Suggestions:\n\ncolor.scale($color, $alpha: 100%)\ncolor.adjust($color, $alpha: 1)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'max_remaining/input.scss',
    data: 'a {b: fade-in(rgba(red, 0.5), 0.5)}\n',
  },
  {
    name: 'max_remaining/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'max_remaining/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: fade-in() is deprecated. Suggestions:\n\ncolor.scale($color, $alpha: 100%)\ncolor.adjust($color, $alpha: 0.5)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'min/input.scss',
    data: 'a {b: fade-in(rgba(red, 0.5), 0)}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'min/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 0)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: fade-in() is deprecated. Suggestion:\n\ncolor.adjust($color, $alpha: 0)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 0)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'middle/input.scss',
    data: 'a {b: fade-in(rgba(red, 0.5), 0.14)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.64);\n}\n',
  },
  {
    name: 'middle/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 0.14)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: fade-in() is deprecated. Suggestions:\n\ncolor.scale($color, $alpha: 28%)\ncolor.adjust($color, $alpha: 0.14)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: fade-in(rgba(red, 0.5), 0.14)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: 'a {b: fade-in($color: rgba(red, 0.5), $amount: 0.14)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.64);\n}\n',
  },
  {
    name: 'named/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in($color: rgba(red, 0.5), $amount: 0.14)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: fade-in() is deprecated. Suggestions:\n\ncolor.scale($color, $alpha: 28%)\ncolor.adjust($color, $alpha: 0.14)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: fade-in($color: rgba(red, 0.5), $amount: 0.14)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'opacify/input.scss',
    data: 'a {b: opacify($color: rgba(red, 0.5), $amount: 0.14)}\n',
  },
  {
    name: 'opacify/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.64);\n}\n',
  },
  {
    name: 'opacify/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: opacify($color: rgba(red, 0.5), $amount: 0.14)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: opacify() is deprecated. Suggestions:\n\ncolor.scale($color, $alpha: 28%)\ncolor.adjust($color, $alpha: 0.14)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: opacify($color: rgba(red, 0.5), $amount: 0.14)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: fade-in(red)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $amount.\n  ,--> input.scss\n1 | a {b: fade-in(red)}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function fade-in($color, $amount) {\n  |           ======================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: fade-in(red, 0.1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n1 | a {b: fade-in(red, 0.1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function fade-in($color, $amount) {\n  |           ======================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/color/input.scss',
    data: 'a {b: fade-in(1, 0.1)}\n',
  },
  {
    name: 'error/type/color/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(1, 0.1)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color: 1 is not a color.\n  ,\n1 | a {b: fade-in(1, 0.1)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/alpha/input.scss',
    data: 'a {b: fade-in(red, blue)}\n',
  },
  {
    name: 'error/type/alpha/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(red, blue)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: blue is not a number.\n  ,\n1 | a {b: fade-in(red, blue)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/bounds/too_low/input.scss',
    data: 'a {b: fade-in(red, -0.001)}\n',
  },
  {
    name: 'error/bounds/too_low/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 1.\n  ,\n1 | a {b: fade-in(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/bounds/too_high/input.scss',
    data: 'a {b: fade-in(red, 1.001)}\n',
  },
  {
    name: 'error/bounds/too_high/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(red, 1.001)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected 1.001 to be within 0 and 1.\n  ,\n1 | a {b: fade-in(red, 1.001)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/bounds/unit/input.scss',
    data: '// This test covers sass/dart-sass#1745, but should be removed once units are\n// fully forbidden (sass/sass#3374).\na {b: fade-in(red, 50%)}\n',
  },
  {
    name: 'error/bounds/unit/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | a {b: fade-in(red, 50%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 3:7  root stylesheet\n\nError: $amount: Expected 50% to be within 0 and 1.\n  ,\n3 | a {b: fade-in(red, 50%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'error/non_legacy/input.scss',
    data: 'a {b: fade-in(color(srgb 1 1 1 / 0.1), 0.1)}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: fade-in(color(srgb 1 1 1 / 0.1), 0.1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: fade-in() is only supported for legacy colors. Please use color.adjust() instead with an explicit $space argument.\n  ,\n1 | a {b: fade-in(color(srgb 1 1 1 / 0.1), 0.1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
