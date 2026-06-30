export default [
  {
    name: 'integer/input.scss',
    data: '@use "sass:math";\na {b: math.ceil(1)}\n',
  },
  {
    name: 'integer/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'high/input.scss',
    data: '@use "sass:math";\na {b: math.ceil(2.9)}\n',
  },
  {
    name: 'high/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'low/input.scss',
    data: '@use "sass:math";\na {b: math.ceil(6.000000000000001)}\n',
  },
  {
    name: 'low/output.css',
    data: 'a {\n  b: 7;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: '@use "sass:math";\na {b: math.ceil(-7.6)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -7;\n}\n',
  },
  {
    name: 'preserves_units/input.scss',
    data: '@use "sass:math";\na {b: math.ceil(7px / 4em) * 1em}\n',
  },
  {
    name: 'preserves_units/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'preserves_units/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(7px, 4em)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.ceil(7px / 4em) * 1em}\n  |                 ^^^^^^^^^\n  '\n    input.scss 2:17  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na {b: math.ceil($number: 1.6)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.ceil(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $number: c is not a number.\n  ,\n2 | a {b: math.ceil(c)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.ceil()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.ceil()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function ceil($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.ceil(1, 2)}\n\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.ceil(1, 2)}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function ceil($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
