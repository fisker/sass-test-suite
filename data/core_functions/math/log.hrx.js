// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/log.hrx

export default [
  {
    name: 'negative/input.scss',
    data: '@use "sass:math";\na {b: math.log(-1)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: '@use "sass:math";\na {b: math.log(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.log(0.000000000001)}\n',
  },
  {
    name: 'zero_fuzzy/output.css',
    data: 'a {\n  b: -27.6310211159;\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: '@use "sass:math";\na {b: math.log(2)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 0.6931471806;\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: '@use "sass:math";\na {b: math.log(math.div(1, 0))}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'base/null/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, null)}\n',
  },
  {
    name: 'base/null/output.css',
    data: 'a {\n  b: 0.6931471806;\n}\n',
  },
  {
    name: 'base/negative/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, -1)}\n',
  },
  {
    name: 'base/negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'base/zero/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, 0)}\n',
  },
  {
    name: 'base/zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'base/zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, 0.000000000001)}\n',
  },
  {
    name: 'base/zero_fuzzy/output.css',
    data: 'a {\n  b: -0.025085833;\n}\n',
  },
  {
    name: 'base/between_zero_and_one/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, 0.5)}\n',
  },
  {
    name: 'base/between_zero_and_one/output.css',
    data: 'a {\n  b: -1;\n}\n',
  },
  {
    name: 'base/one/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, 1)}\n',
  },
  {
    name: 'base/one/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'base/one_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, 1.000000000001)}\n',
  },
  {
    name: 'base/one_fuzzy/output.css',
    data: 'a {\n  b: 693085564849.9645;\n}\n',
  },
  {
    name: 'base/positive/input.scss',
    data: '@use "sass:math";\na {b: math.log(2, 10)}\n',
  },
  {
    name: 'base/positive/output.css',
    data: 'a {\n  b: 0.3010299957;\n}\n',
  },
  {
    name: 'named_arg/number/input.scss',
    data: '@use "sass:math";\na {b: math.log($number: 2)}\n',
  },
  {
    name: 'named_arg/number/output.css',
    data: 'a {\n  b: 0.6931471806;\n}\n',
  },
  {
    name: 'named_args/number_with_base/input.scss',
    data: '@use "sass:math";\na {b: math.log($number: 2, $base: 10)}\n',
  },
  {
    name: 'named_args/number_with_base/output.css',
    data: 'a {\n  b: 0.3010299957;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.log("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n2 | a {b: math.log("0")}\n  |       ^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/number_has_units/input.scss',
    data: '@use "sass:math";\na {b: math.log(1px)}\n',
  },
  {
    name: 'error/number_has_units/error',
    data: "Error: $number: Expected 1px to have no units.\n  ,\n2 | a {b: math.log(1px)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/base_has_units/input.scss',
    data: '@use "sass:math";\na {b: math.log(1, 1px)}\n',
  },
  {
    name: 'error/base_has_units/error',
    data: "Error: $base: Expected 1px to have no units.\n  ,\n2 | a {b: math.log(1, 1px)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.log()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.log()}\n  |       ^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function log($number, $base: null) {\n  |           ========================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.log(0, 0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: math.log(0, 0, 0)}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function log($number, $base: null) {\n  |           ========================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
