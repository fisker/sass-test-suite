// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/floor.hrx

export default [
  {
    name: 'integer/input.scss',
    data: '@use "sass:math";\na {b: math.floor(1)}\n',
  },
  {
    name: 'integer/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'high/input.scss',
    data: '@use "sass:math";\na {b: math.floor(2.999999999999999)}\n',
  },
  {
    name: 'high/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'low/input.scss',
    data: '@use "sass:math";\na {b: math.floor(6.1)}\n',
  },
  {
    name: 'low/output.css',
    data: 'a {\n  b: 6;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: '@use "sass:math";\na {b: math.floor(-7.2)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -8;\n}\n',
  },
  {
    name: 'preserves_units/input.scss',
    data: '@use "sass:math";\na {b: math.floor(7px / 4em) * 1em}\n',
  },
  {
    name: 'preserves_units/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'preserves_units/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(7px, 4em)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.floor(7px / 4em) * 1em}\n  |                  ^^^^^^^^^\n  '\n    input.scss 2:18  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na {b: math.floor($number: 1.6)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.floor(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $number: c is not a number.\n  ,\n2 | a {b: math.floor(c)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.floor()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.floor()}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function floor($number) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.floor(1, 2)}\n\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.floor(1, 2)}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function floor($number) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
