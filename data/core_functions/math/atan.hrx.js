export default [
  {
    name: 'negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan(math.div(-1, 0))}\n',
  },
  {
    name: 'negative_infinity/output.css',
    data: 'a {\n  b: -90deg;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: '@use "sass:math";\na {b: math.atan(-1)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -45deg;\n}\n',
  },
  {
    name: 'negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan(-0.0)}\n',
  },
  {
    name: 'negative_zero/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'negative_zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan(-0.000000000001)}\n',
  },
  {
    name: 'negative_zero_fuzzy/output.css',
    data: 'a {\n  b: -0.0000000001deg;\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: '@use "sass:math";\na {b: math.atan(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.atan(0.000000000001)}\n',
  },
  {
    name: 'zero_fuzzy/output.css',
    data: 'a {\n  b: 0.0000000001deg;\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: '@use "sass:math";\na {b: math.atan(1)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 45deg;\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: '@use "sass:math";\na {b: math.atan(math.div(1, 0))}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.atan("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n2 | a {b: math.atan("0")}\n  |       ^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/units/input.scss',
    data: '@use "sass:math";\na {b: math.atan(1px)}\n',
  },
  {
    name: 'error/units/error',
    data: "Error: $number: Expected 1px to have no units.\n  ,\n2 | a {b: math.atan(1px)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.atan()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.atan()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function atan($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.atan(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.atan(0, 0)}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function atan($number) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
