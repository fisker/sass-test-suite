// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/lighten.hrx

export default [
  {
    name: 'max/input.scss',
    data: 'a {b: lighten(red, 100%)}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'max/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, 100%)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 100%)\ncolor.adjust($color, $lightness: 100%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten(red, 100%)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'max_remaining/input.scss',
    data: 'a {b: lighten(red, 50%)}\n',
  },
  {
    name: 'max_remaining/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'max_remaining/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, 50%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 100%)\ncolor.adjust($color, $lightness: 50%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten(red, 50%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'min/input.scss',
    data: 'a {b: lighten(red, 0%)}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'min/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, 0%)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestion:\n\ncolor.adjust($color, $lightness: 0%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten(red, 0%)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'middle/input.scss',
    data: 'a {b: lighten(red, 14%)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: rgb(255, 71.4, 71.4);\n}\n',
  },
  {
    name: 'middle/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, 14%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 28%)\ncolor.adjust($color, $lightness: 14%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten(red, 14%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'fraction/input.scss',
    data: 'a {b: lighten(red, 0.5%)}\n',
  },
  {
    name: 'fraction/output.css',
    data: 'a {\n  b: rgb(255, 2.55, 2.55);\n}\n',
  },
  {
    name: 'fraction/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, 0.5%)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 1%)\ncolor.adjust($color, $lightness: 0.5%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten(red, 0.5%)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'alpha/input.scss',
    data: 'a {b: lighten(rgba(red, 0.4), 100%)}\n',
  },
  {
    name: 'alpha/output.css',
    data: 'a {\n  b: rgba(255, 255, 255, 0.4);\n}\n',
  },
  {
    name: 'alpha/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(rgba(red, 0.4), 100%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 100%)\ncolor.adjust($color, $lightness: 100%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten(rgba(red, 0.4), 100%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: 'a {b: lighten($color: red, $amount: 14%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(255, 71.4, 71.4);\n}\n',
  },
  {
    name: 'named/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten($color: red, $amount: 14%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 28%)\ncolor.adjust($color, $lightness: 14%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: lighten($color: red, $amount: 14%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: lighten(red)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $amount.\n  ,--> input.scss\n1 | a {b: lighten(red)}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function lighten($color, $amount) {\n  |           ======================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: lighten(red, 1%, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n1 | a {b: lighten(red, 1%, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function lighten($color, $amount) {\n  |           ======================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/color/input.scss',
    data: 'a {b: lighten(1, 2)}\n',
  },
  {
    name: 'error/type/color/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(1, 2)}\n  |       ^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color: 1 is not a color.\n  ,\n1 | a {b: lighten(1, 2)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/lightness/input.scss',
    data: 'a {b: lighten(red, blue)}\n',
  },
  {
    name: 'error/type/lightness/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, blue)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: blue is not a number.\n  ,\n1 | a {b: lighten(red, blue)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/bounds/too_low/input.scss',
    data: 'a {b: lighten(red, -0.001)}\n',
  },
  {
    name: 'error/bounds/too_low/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 100.\n  ,\n1 | a {b: lighten(red, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/bounds/too_high/input.scss',
    data: 'a {b: lighten(red, 100.001)}\n',
  },
  {
    name: 'error/bounds/too_high/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(red, 100.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected 100.001 to be within 0 and 100.\n  ,\n1 | a {b: lighten(red, 100.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/non_legacy/input.scss',
    data: 'a {b: lighten(color(srgb 0 0 0), 10%)}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: lighten(color(srgb 0 0 0), 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: lighten() is only supported for legacy colors. Please use color.adjust() instead with an explicit $space argument.\n  ,\n1 | a {b: lighten(color(srgb 0 0 0), 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
