// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/acos.hrx

export default [
  {
    name: 'less_than_negative_one/input.scss',
    data: '@use "sass:math";\na {b: math.acos(-2)}\n',
  },
  {
    name: 'less_than_negative_one/output.css',
    data: 'a {\n  b: calc(NaN * 1deg);\n}\n',
  },
  {
    name: 'negative_decimal/input.scss',
    data: '@use "sass:math";\na {b: math.acos(-0.5)}\n',
  },
  {
    name: 'negative_decimal/output.css',
    data: 'a {\n  b: 120deg;\n}\n',
  },
  {
    name: 'decimal/input.scss',
    data: '@use "sass:math";\na {b: math.acos(0.5)}\n',
  },
  {
    name: 'decimal/output.css',
    data: 'a {\n  b: 60deg;\n}\n',
  },
  {
    name: 'one/input.scss',
    data: '@use "sass:math";\na {b: math.acos(1)}\n',
  },
  {
    name: 'one/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'one_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.acos(1.000000000001)}\n',
  },
  {
    name: 'one_fuzzy/output.css',
    data: 'a {\n  b: calc(NaN * 1deg);\n}\n',
  },
  {
    name: 'greater_than_one/input.scss',
    data: '@use "sass:math";\na {b: math.acos(2)}\n',
  },
  {
    name: 'greater_than_one/output.css',
    data: 'a {\n  b: calc(NaN * 1deg);\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.acos("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n2 | a {b: math.acos("0")}\n  |       ^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/units/input.scss',
    data: '@use "sass:math";\na {b: math.acos(1px)}\n',
  },
  {
    name: 'error/units/error',
    data: "Error: $number: Expected 1px to have no units.\n  ,\n2 | a {b: math.acos(1px)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.acos()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.acos()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function acos($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.acos(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.acos(0, 0)}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function acos($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
