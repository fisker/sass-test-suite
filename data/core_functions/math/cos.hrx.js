export default [
  {
    name: 'negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.cos(math.div(-1, 0))}\n',
  },
  {
    name: 'negative_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: '@use "sass:math";\na {b: math.cos(math.div(1, 0))}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'deg/input.scss',
    data: '@use "sass:math";\na {b: math.cos(1deg)}\n',
  },
  {
    name: 'deg/output.css',
    data: 'a {\n  b: 0.9998476952;\n}\n',
  },
  {
    name: 'grad/input.scss',
    data: '@use "sass:math";\na {b: math.cos(1grad)}\n',
  },
  {
    name: 'grad/output.css',
    data: 'a {\n  b: 0.9998766325;\n}\n',
  },
  {
    name: 'rad/input.scss',
    data: '@use "sass:math";\na {b: math.cos(1rad)}\n',
  },
  {
    name: 'rad/output.css',
    data: 'a {\n  b: 0.5403023059;\n}\n',
  },
  {
    name: 'turn/input.scss',
    data: '@use "sass:math";\na {b: math.cos(1turn)}\n',
  },
  {
    name: 'turn/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'unitless/input.scss',
    data: '@use "sass:math";\na {b: math.cos(1)}\n',
  },
  {
    name: 'unitless/output.css',
    data: 'a {\n  b: 0.5403023059;\n}\n',
  },
  {
    name: 'named_arg/input.scss',
    data: '@use "sass:math";\na {b: math.cos($number: 1)}\n',
  },
  {
    name: 'named_arg/output.css',
    data: 'a {\n  b: 0.5403023059;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.cos("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n2 | a {b: math.cos("0")}\n  |       ^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/unit/input.scss',
    data: '@use "sass:math";\na {b: math.cos(1px)}\n',
  },
  {
    name: 'error/unit/error',
    data: "Error: $number: Expected 1px to have an angle unit (deg, grad, rad, turn).\n  ,\n2 | a {b: math.cos(1px)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.cos()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.cos()}\n  |       ^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function cos($number) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.cos(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.cos(0, 0)}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function cos($number) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
