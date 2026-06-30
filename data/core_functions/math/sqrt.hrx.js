// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/sqrt.hrx

export default [
  {
    name: 'negative/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(-1)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(-0.0)}\n',
  },
  {
    name: 'negative_zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'negative_zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(-0.000000000001)}\n',
  },
  {
    name: 'negative_zero_fuzzy/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(0.000000000001)}\n',
  },
  {
    name: 'zero_fuzzy/output.css',
    data: 'a {\n  b: 0.000001;\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(2)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 1.4142135624;\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(math.div(1, 0))}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'named_arg/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt($number: 2)}\n',
  },
  {
    name: 'named_arg/output.css',
    data: 'a {\n  b: 1.4142135624;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n2 | a {b: math.sqrt("0")}\n  |       ^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/units/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(1px)}\n',
  },
  {
    name: 'error/units/error',
    data: "Error: $number: Expected 1px to have no units.\n  ,\n2 | a {b: math.sqrt(1px)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.sqrt()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function sqrt($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.sqrt(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.sqrt(0, 0)}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function sqrt($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
