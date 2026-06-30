export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `abs()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: abs(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: abs(1)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: abs(-5.6)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: 5.6;\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: abs(1px + 2px - var(--c))\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: abs(3px - var(--c));\n}\n',
  },
  {
    name: 'preserves_units/input.scss',
    data: 'a {b: abs(-7px / 4em) * 1em}\n',
  },
  {
    name: 'preserves_units/output.css',
    data: 'a {\n  b: 1.75px;\n}\n',
  },
  {
    name: 'preserves_single_unit/input.scss',
    data: 'a {b: abs(1 + 1px)}\n',
  },
  {
    name: 'preserves_single_unit/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'preserves_single_unit/warning',
    data: "DEPRECATION WARNING [global-builtin]: In future versions of Sass, abs() will be interpreted as the CSS abs() calculation. This doesn't allow unitless numbers to be mixed with numbers with units. If you want to use the Sass function, call math.abs() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: abs(1 + 1px)}\n  |           ^^^^^^^\n  '\n    input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'sass_script/input.scss',
    data: 'a {b: abs($number: -3)}\n',
  },
  {
    name: 'sass_script/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'sass_script/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.abs instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: abs($number: -3)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'percentage_warning/input.scss',
    data: 'a {b: abs(-7.5%)}\n',
  },
  {
    name: 'percentage_warning/output.css',
    data: 'a {\n  b: 7.5%;\n}\n',
  },
  {
    name: 'percentage_warning/warning',
    data: "DEPRECATION WARNING [abs-percent]: Passing percentage units to the global abs() function is deprecated.\nIn the future, this will emit a CSS abs() function to be resolved by the browser.\nTo preserve current behavior: math.abs(-7.5%)\nTo emit a CSS abs() now: abs(#{-7.5%})\nMore info: https://sass-lang.com/d/abs-percent\n\n  ,\n1 | a {b: abs(-7.5%)}\n  |       ^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'math/slash_as_division/input.scss',
    data: 'b {\n  a: 2px / abs(1.5);\n}\n',
  },
  {
    name: 'math/slash_as_division/output.css',
    data: 'b {\n  a: 1.3333333333px;\n}\n',
  },
  {
    name: 'math/slash_as_division/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(2px, abs(1.5)) or calc(2px / abs(1.5))\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   a: 2px / abs(1.5);\n  |      ^^^^^^^^^^^^^^\n  '\n    input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: AbS(-2)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function abs($arg) {@return $arg}\na {b: abs(-2)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: -2;\n}\n',
  },
  {
    name: 'error/sass_script_and_variable/input.scss',
    data: 'a {b: abs($number: var(--c))}\n',
  },
  {
    name: 'error/sass_script_and_variable/error',
    data: "Error: $number: var(--c) is not a number.\n  ,\n1 | a {b: abs($number: var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: 'a {b: abs("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n1 | a {b: abs("0")}\n  |       ^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: abs()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: abs()}\n  |       ^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: abs(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: abs(1, 2)}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: abs($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: abs($)}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
