// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/abs.hrx

export default [
  {
    name: 'zero/input.scss',
    data: '@use "sass:math";\na {b: math.abs(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'positive/integer/input.scss',
    data: '@use "sass:math";\na {b: math.abs(1)}\n',
  },
  {
    name: 'positive/integer/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'positive/decimal/input.scss',
    data: '@use "sass:math";\na {b: math.abs(5.6)}\n',
  },
  {
    name: 'positive/decimal/output.css',
    data: 'a {\n  b: 5.6;\n}\n',
  },
  {
    name: 'negative/integer/input.scss',
    data: '@use "sass:math";\na {b: math.abs(-17)}\n',
  },
  {
    name: 'negative/integer/output.css',
    data: 'a {\n  b: 17;\n}\n',
  },
  {
    name: 'negative/decimal/input.scss',
    data: '@use "sass:math";\na {b: math.abs(-123.456)}\n',
  },
  {
    name: 'negative/decimal/output.css',
    data: 'a {\n  b: 123.456;\n}\n',
  },
  {
    name: 'preserves_units/input.scss',
    data: '@use "sass:math";\na {b: math.abs(-7px / 4em) * 1em}\n',
  },
  {
    name: 'preserves_units/output.css',
    data: 'a {\n  b: 1.75px;\n}\n',
  },
  {
    name: 'preserves_units/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(-7px, 4em)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: math.abs(-7px / 4em) * 1em}\n  |                ^^^^^^^^^^\n  '\n    input.scss 2:16  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na { b: math.abs($number: 3)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.abs(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $number: c is not a number.\n  ,\n2 | a {b: math.abs(c)}\n  |       ^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.abs()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.abs()}\n  |       ^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function abs($number) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.abs(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.abs(1, 2)}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function abs($number) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
