export default [
  {
    name: 'negative_infinity/input.scss',
    data: '@use "sass:math";\na {b: math.tan(math.div(-1, 0))}\n',
  },
  {
    name: 'negative_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: '@use "sass:math";\na {b: math.tan(math.div(1, 0))}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'negative_asymptote/radian/input.scss',
    data: '@use "sass:math";\na {b: math.tan(-0.5rad * math.$pi)}\n',
  },
  {
    name: 'negative_asymptote/radian/output.css',
    data: 'a {\n  b: -16331239353195370;\n}\n',
  },
  {
    name: 'asymptote/radian/input.scss',
    data: '@use "sass:math";\na {b: math.tan(0.5rad * math.$pi)}\n',
  },
  {
    name: 'asymptote/radian/output.css',
    data: 'a {\n  b: 16331239353195370;\n}\n',
  },
  {
    name: 'negative_zero/input.scss',
    data: '@use "sass:math";\na {b: math.tan(-0.0)}\n',
  },
  {
    name: 'negative_zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'negative_zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.tan(-0.000000000001)}\n',
  },
  {
    name: 'negative_zero_fuzzy/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: '@use "sass:math";\na {b: math.tan(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'zero_fuzzy/input.scss',
    data: '@use "sass:math";\na {b: math.tan(0.000000000001)}\n',
  },
  {
    name: 'zero_fuzzy/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'deg/input.scss',
    data: '@use "sass:math";\na {b: math.tan(1deg)}\n',
  },
  {
    name: 'deg/output.css',
    data: 'a {\n  b: 0.0174550649;\n}\n',
  },
  {
    name: 'grad/input.scss',
    data: '@use "sass:math";\na {b: math.tan(1grad)}\n',
  },
  {
    name: 'grad/output.css',
    data: 'a {\n  b: 0.0157092553;\n}\n',
  },
  {
    name: 'rad/input.scss',
    data: '@use "sass:math";\na {b: math.tan(1rad)}\n',
  },
  {
    name: 'rad/output.css',
    data: 'a {\n  b: 1.5574077247;\n}\n',
  },
  {
    name: 'turn/input.scss',
    data: '@use "sass:math";\na {b: math.tan(1turn)}\n',
  },
  {
    name: 'turn/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'unitless/input.scss',
    data: '@use "sass:math";\na {b: math.tan(1)}\n',
  },
  {
    name: 'unitless/output.css',
    data: 'a {\n  b: 1.5574077247;\n}\n',
  },
  {
    name: 'named_arg/input.scss',
    data: '@use "sass:math";\na {b: math.tan($number: 1)}\n',
  },
  {
    name: 'named_arg/output.css',
    data: 'a {\n  b: 1.5574077247;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.tan("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n2 | a {b: math.tan("0")}\n  |       ^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/unit/input.scss',
    data: '@use "sass:math";\na {b: math.tan(1px)}\n',
  },
  {
    name: 'error/unit/error',
    data: "Error: $number: Expected 1px to have an angle unit (deg, grad, rad, turn).\n  ,\n2 | a {b: math.tan(1px)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.tan()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.tan()}\n  |       ^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function tan($number) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.tan(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.tan(0, 0)}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function tan($number) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
