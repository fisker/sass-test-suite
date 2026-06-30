// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/pow/base_greater_than_zero.hrx

export default [
  {
    name: 'base/less_than_one/with_exponent/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(0.5, math.div(-1, 0))}\n',
  },
  {
    name: 'base/less_than_one/with_exponent/negative_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'base/less_than_one/with_exponent/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.5, math.div(1, 0))}\n',
  },
  {
    name: 'base/less_than_one/with_exponent/infinity/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'base/one/with_exponent/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(1, math.div(-1, 0))}\n',
  },
  {
    name: 'base/one/with_exponent/negative_infinity/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'base/one/with_exponent/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(1, math.div(1, 0))}\n',
  },
  {
    name: 'base/one/with_exponent/infinity/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'base/one_fuzzy/with_exponent/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(1.000000000001, math.div(-1, 0))}\n',
  },
  {
    name: 'base/one_fuzzy/with_exponent/negative_infinity/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'base/one_fuzzy/with_exponent/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(1.000000000001, math.div(1, 0))}\n',
  },
  {
    name: 'base/one_fuzzy/with_exponent/infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(2, math.div(-1, 0))}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/negative_infinity/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/zero/input.scss',
    data: '@use "sass:math";\na {b: math.pow(2, 0)}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/zero/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.pow(2, 0.000000000001)}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/zero_fuzzy/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(2, 3)}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/integer/output.css',
    data: 'a {\n  b: 8;\n}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/integer_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.pow(2, 3.000000000001)}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/integer_fuzzy/output.css',
    data: 'a {\n  b: 8;\n}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/decimal/input.scss',
    data: '@use "sass:math";\na {b: math.pow(2, 0.5)}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/decimal/output.css',
    data: 'a {\n  b: 1.4142135624;\n}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(2, math.div(1, 0))}\n',
  },
  {
    name: 'base/greater_than_one/with_exponent/infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
]
