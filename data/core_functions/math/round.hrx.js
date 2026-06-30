// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/round.hrx

export default [
  {
    name: 'integer/input.scss',
    data: '@use "sass:math";\na {b: math.round(1)}\n',
  },
  {
    name: 'integer/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'up/high/input.scss',
    data: '@use "sass:math";\na {b: math.round(2.9)}\n',
  },
  {
    name: 'up/high/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'up/point_five/input.scss',
    data: '@use "sass:math";\na {b: math.round(16.5)}\n',
  },
  {
    name: 'up/point_five/output.css',
    data: 'a {\n  b: 17;\n}\n',
  },
  {
    name: 'up/negative/input.scss',
    data: '@use "sass:math";\na {b: math.round(-5.4)}\n',
  },
  {
    name: 'up/negative/output.css',
    data: 'a {\n  b: -5;\n}\n',
  },
  {
    name: 'up/to_zero/input.scss',
    data: '@use "sass:math";\na {b: math.round(-0.2)}\n',
  },
  {
    name: 'up/to_zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'down/low/input.scss',
    data: '@use "sass:math";\na {b: math.round(2.2)}\n',
  },
  {
    name: 'down/low/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'down/negative/input.scss',
    data: '@use "sass:math";\na {b: math.round(-5.6)}\n',
  },
  {
    name: 'down/negative/output.css',
    data: 'a {\n  b: -6;\n}\n',
  },
  {
    name: 'down/to_zero/input.scss',
    data: '@use "sass:math";\na {b: math.round(0.2)}\n',
  },
  {
    name: 'down/to_zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'down/within_precision/input.scss',
    data: '// This is the largest number that\'s representable as a float and outside the\n// precision range to be considered equal to 1.5.\n@use "sass:math";\na {b: math.round(1.4999999999949998)}\n',
  },
  {
    name: 'down/within_precision/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'preserves_units/input.scss',
    data: '@use "sass:math";\na {b: math.round(7px / 4em) * 1em}\n',
  },
  {
    name: 'preserves_units/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'preserves_units/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(7px, 4em)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.round(7px / 4em) * 1em}\n  |                  ^^^^^^^^^\n  '\n    input.scss 2:18  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na {b: math.round($number: 1.6)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.round(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $number: c is not a number.\n  ,\n2 | a {b: math.round(c)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.round()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.round()}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function round($number) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.round(1, 2)}\n\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.round(1, 2)}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function round($number) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
