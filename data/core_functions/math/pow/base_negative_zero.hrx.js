export default [
  {
    name: 'with_exponent/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, math.div(-1, 0))}\n',
  },
  {
    name: 'with_exponent/negative_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'with_exponent/negative_even_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, -2)}\n',
  },
  {
    name: 'with_exponent/negative_even_integer/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'with_exponent/negative_even_integer_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, -2.000000000001)}\n',
  },
  {
    name: 'with_exponent/negative_even_integer_fuzzy/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'with_exponent/negative_odd_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, -3)}\n',
  },
  {
    name: 'with_exponent/negative_odd_integer/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'with_exponent/negative_odd_integer_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, -3.000000000001)}\n',
  },
  {
    name: 'with_exponent/negative_odd_integer_fuzzy/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'with_exponent/negative_decimal/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, -0.5)}\n',
  },
  {
    name: 'with_exponent/negative_decimal/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'with_exponent/zero/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, 0)}\n',
  },
  {
    name: 'with_exponent/zero/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'with_exponent/zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, 0.000000000001)}\n',
  },
  {
    name: 'with_exponent/zero_fuzzy/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'with_exponent/even_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, 2)}\n',
  },
  {
    name: 'with_exponent/even_integer/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'with_exponent/even_integer_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, 2.000000000001)}\n',
  },
  {
    name: 'with_exponent/even_integer_fuzzy/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'with_exponent/odd_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, 3)}\n',
  },
  {
    name: 'with_exponent/odd_integer/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'with_exponent/odd_integer_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, 3.000000000001)}\n',
  },
  {
    name: 'with_exponent/odd_integer_fuzzy/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'with_exponent/decimal/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, 0.5)}\n',
  },
  {
    name: 'with_exponent/decimal/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'with_exponent/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.0, math.div(1, 0))}\n',
  },
  {
    name: 'with_exponent/infinity/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, math.div(-1, 0))}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_even_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, -2)}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_even_integer/output.css',
    data: 'a {\n  b: 1000000000000000000000000;\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_odd_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, -3)}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_odd_integer/output.css',
    data: 'a {\n  b: -1000000000000000000000000000000000000;\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_decimal/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, -0.5)}\n',
  },
  {
    name: 'fuzzy/with_exponent/negative_decimal/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/zero/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, 0)}\n',
  },
  {
    name: 'fuzzy/with_exponent/zero/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/even_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, 2)}\n',
  },
  {
    name: 'fuzzy/with_exponent/even_integer/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/odd_integer/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, 3)}\n',
  },
  {
    name: 'fuzzy/with_exponent/odd_integer/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/decimal/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, 0.5)}\n',
  },
  {
    name: 'fuzzy/with_exponent/decimal/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'fuzzy/with_exponent/infinity/input.scss',
    data: '@use "sass:math";\na {b: math.pow(-0.000000000001, math.div(1, 0))}\n',
  },
  {
    name: 'fuzzy/with_exponent/infinity/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
]
