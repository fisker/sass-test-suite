export default [
  {
    name: 'named_args/input.scss',
    data: '@use "sass:math";\na {b: math.pow($base: 2, $exponent: 3)}\n',
  },
  {
    name: 'named_args/output.css',
    data: 'a {\n  b: 8;\n}\n',
  },
  {
    name: 'error/base_type/input.scss',
    data: '@use "sass:math";\na {b: math.pow("0", 0)}\n',
  },
  {
    name: 'error/base_type/error',
    data: 'Error: $base: "0" is not a number.\n  ,\n2 | a {b: math.pow("0", 0)}\n  |       ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/exponent_type/input.scss',
    data: '@use "sass:math";\na {b: math.pow(0, "0")}\n',
  },
  {
    name: 'error/exponent_type/error',
    data: 'Error: $exponent: "0" is not a number.\n  ,\n2 | a {b: math.pow(0, "0")}\n  |       ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/base_has_units/input.scss',
    data: '@use "sass:math";\na {b: math.pow(1px, 0)}\n',
  },
  {
    name: 'error/base_has_units/error',
    data: "Error: $base: Expected 1px to have no units.\n  ,\n2 | a {b: math.pow(1px, 0)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/exponent_has_units/input.scss',
    data: '@use "sass:math";\na {b: math.pow(0, 1px)}\n',
  },
  {
    name: 'error/exponent_has_units/error',
    data: "Error: $exponent: Expected 1px to have no units.\n  ,\n2 | a {b: math.pow(0, 1px)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.pow()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $base.\n  ,--> input.scss\n2 | a {b: math.pow()}\n  |       ^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function pow($base, $exponent) {\n  |           ===================== declaration\n  '\n  input.scss 2:7  root stylesheet\n\n",
  },
  {
    name: 'error/one_arg/input.scss',
    data: '@use "sass:math";\na {b: math.pow(0)}\n',
  },
  {
    name: 'error/one_arg/error',
    data: "Error: Missing argument $exponent.\n  ,--> input.scss\n2 | a {b: math.pow(0)}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function pow($base, $exponent) {\n  |           ===================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.pow(0, 0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: math.pow(0, 0, 0)}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function pow($base, $exponent) {\n  |           ===================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
