export default [
  {
    name: 'css_overload/README.md',
    data: 'Sass supports saturate() with one argument for compatibility with [plain CSS][].\n\n[plain CSS]: https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate\n',
  },
  {
    name: 'css_overload/unit/input.scss',
    data: 'a {b: saturate(50%)}\n',
  },
  {
    name: 'css_overload/unit/output.css',
    data: 'a {\n  b: saturate(50%);\n}\n',
  },
  {
    name: 'css_overload/unitless/input.scss',
    data: 'a {b: saturate(1)}\n',
  },
  {
    name: 'css_overload/unitless/output.css',
    data: 'a {\n  b: saturate(1);\n}\n',
  },
  {
    name: 'css_overload/with_sass_var/input.scss',
    data: '$c: 1;\na {b: saturate($c)}\n',
  },
  {
    name: 'css_overload/with_sass_var/output.css',
    data: 'a {\n  b: saturate(1);\n}\n',
  },
  {
    name: 'css_overload/with_css_var/input.scss',
    data: 'a {b: saturate(var(--c))}\n',
  },
  {
    name: 'css_overload/with_css_var/output.css',
    data: 'a {\n  b: saturate(var(--c));\n}\n',
  },
  {
    name: 'css_overload/with_calc/input.scss',
    data: 'a {b: saturate(calc(1 + 2))}\n',
  },
  {
    name: 'css_overload/with_calc/output.css',
    data: 'a {\n  b: saturate(3);\n}\n',
  },
  {
    name: 'css_overload/with_unquoted_calc/input.scss',
    data: '@use "sass:string";\na {b: saturate(string.unquote(\'calc(1)\'))}\n',
  },
  {
    name: 'css_overload/with_unquoted_calc/output.css',
    data: 'a {\n  b: saturate(calc(1));\n}\n',
  },
  {
    name: 'css_overload/named/input.scss',
    data: 'a {b: saturate($amount: 50%)}\n',
  },
  {
    name: 'css_overload/named/output.css',
    data: 'a {\n  b: saturate(50%);\n}\n',
  },
  {
    name: 'two_args/max/input.scss',
    data: 'a {b: saturate(plum, 100%)}\n',
  },
  {
    name: 'two_args/max/output.css',
    data: 'a {\n  b: #ff7eff;\n}\n',
  },
  {
    name: 'two_args/max/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(plum, 100%)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: saturate() is deprecated. Suggestions:\n\ncolor.scale($color, $saturation: 100%)\ncolor.adjust($color, $saturation: 100%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: saturate(plum, 100%)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'two_args/max_remaining/input.scss',
    data: 'a {b: saturate(plum, 53%)}\n',
  },
  {
    name: 'two_args/max_remaining/output.css',
    data: 'a {\n  b: #ff7eff;\n}\n',
  },
  {
    name: 'two_args/max_remaining/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(plum, 53%)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: saturate() is deprecated. Suggestions:\n\ncolor.scale($color, $saturation: 100%)\ncolor.adjust($color, $saturation: 53%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: saturate(plum, 53%)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'two_args/min/input.scss',
    data: 'a {b: saturate(plum, 0%)}\n',
  },
  {
    name: 'two_args/min/output.css',
    data: 'a {\n  b: plum;\n}\n',
  },
  {
    name: 'two_args/min/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(plum, 0%)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: saturate() is deprecated. Suggestion:\n\ncolor.adjust($color, $saturation: 0%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: saturate(plum, 0%)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'two_args/middle/input.scss',
    data: 'a {b: saturate(plum, 14%)}\n',
  },
  {
    name: 'two_args/middle/output.css',
    data: 'a {\n  b: rgb(230.03, 150.97, 230.03);\n}\n',
  },
  {
    name: 'two_args/middle/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(plum, 14%)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: saturate() is deprecated. Suggestions:\n\ncolor.scale($color, $saturation: 26.5588235294%)\ncolor.adjust($color, $saturation: 14%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: saturate(plum, 14%)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'two_args/alpha/input.scss',
    data: 'a {b: saturate(rgba(plum, 0.5), 100%)}\n',
  },
  {
    name: 'two_args/alpha/output.css',
    data: 'a {\n  b: rgba(255, 126, 255, 0.5);\n}\n',
  },
  {
    name: 'two_args/alpha/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(rgba(plum, 0.5), 100%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: saturate() is deprecated. Suggestions:\n\ncolor.scale($color, $saturation: 100%)\ncolor.adjust($color, $saturation: 100%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: saturate(rgba(plum, 0.5), 100%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'two_args/named/input.scss',
    data: 'a {b: saturate($color: plum, $amount: 14%)}\n',
  },
  {
    name: 'two_args/named/output.css',
    data: 'a {\n  b: rgb(230.03, 150.97, 230.03);\n}\n',
  },
  {
    name: 'two_args/named/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate($color: plum, $amount: 14%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [color-functions]: saturate() is deprecated. Suggestions:\n\ncolor.scale($color, $saturation: 26.5588235294%)\ncolor.adjust($color, $saturation: 14%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n1 | a {b: saturate($color: plum, $amount: 14%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: saturate()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $amount.\n  ,--> input.scss\n1 | a {b: saturate()}\n  |       ^^^^^^^^^^ invocation\n  '\n  ,\n1 | @function saturate($amount) {\n  |           ================= declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: saturate(plum, 1%, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n1 | a {b: saturate(plum, 1%, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,\n1 | @function saturate($color, $amount) {\n  |           ========================= declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/one_arg/type/input.scss',
    data: 'a {b: saturate(red)}\n',
  },
  {
    name: 'error/one_arg/type/error',
    data: "Error: $amount: red is not a number.\n  ,\n1 | a {b: saturate(red)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n\n",
  },
  {
    name: 'error/with_module/one_arg/type/input.scss',
    data: '@use "sass:color";\na {b: color.saturate(var(--c))}\n',
  },
  {
    name: 'error/with_module/one_arg/type/error',
    data: "Error: Missing argument $amount.\n  ,--> input.scss\n2 | a {b: color.saturate(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function saturate($color, $amount) {\n  |           ========================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/two_args/type/color/input.scss',
    data: 'a {b: saturate(1, 2)}\n',
  },
  {
    name: 'error/two_args/type/color/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(1, 2)}\n  |       ^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $color: 1 is not a color.\n  ,\n1 | a {b: saturate(1, 2)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/two_args/type/lightness/input.scss',
    data: 'a {b: saturate(plum, blue)}\n',
  },
  {
    name: 'error/two_args/type/lightness/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(plum, blue)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: blue is not a number.\n  ,\n1 | a {b: saturate(plum, blue)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/two_args/bounds/too_low/input.scss',
    data: 'a {b: saturate(plum, -0.001)}\n',
  },
  {
    name: 'error/two_args/bounds/too_low/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(plum, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected -0.001 to be within 0 and 100.\n  ,\n1 | a {b: saturate(plum, -0.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/two_args/bounds/too_high/input.scss',
    data: 'a {b: saturate(plum, 100.001)}\n',
  },
  {
    name: 'error/two_args/bounds/too_high/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(plum, 100.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $amount: Expected 100.001 to be within 0 and 100.\n  ,\n1 | a {b: saturate(plum, 100.001)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/non_legacy/input.scss',
    data: 'a {b: saturate(color(srgb 1 1 1), 10%)}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: saturate(color(srgb 1 1 1), 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: saturate() is only supported for legacy colors. Please use color.adjust() instead with an explicit $space argument.\n  ,\n1 | a {b: saturate(color(srgb 1 1 1), 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
