// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/atan2/arguments.hrx

export default [
  {
    name: 'named_args/input.scss',
    data: '@use "sass:math";\na {b: math.atan2($y: 1, $x: -1)}\n',
  },
  {
    name: 'named_args/output.css',
    data: 'a {\n  b: 135deg;\n}\n',
  },
  {
    name: 'compatible_units/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(1cm, -10mm)}\n',
  },
  {
    name: 'compatible_units/output.css',
    data: 'a {\n  b: 135deg;\n}\n',
  },
  {
    name: 'error/y_type/input.scss',
    data: '@use "sass:math";\na {b: math.atan2("0", 0)}\n',
  },
  {
    name: 'error/y_type/error',
    data: 'Error: $y: "0" is not a number.\n  ,\n2 | a {b: math.atan2("0", 0)}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/x_type/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, "0")}\n',
  },
  {
    name: 'error/x_type/error',
    data: 'Error: $x: "0" is not a number.\n  ,\n2 | a {b: math.atan2(0, "0")}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/incompatible_units/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(1px, 1deg)}\n',
  },
  {
    name: 'error/incompatible_units/error',
    data: "Error: $x: 1deg and $y: 1px have incompatible units.\n  ,\n2 | a {b: math.atan2(1px, 1deg)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/unitless_y/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(1, 1px)}\n',
  },
  {
    name: 'error/unitless_y/error',
    data: "Error: $x: 1px and $y: 1 have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.atan2(1, 1px)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/unitless_x/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(1px, 1)}\n',
  },
  {
    name: 'error/unitless_x/error',
    data: "Error: $x: 1 and $y: 1px have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.atan2(1px, 1)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.atan2()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $y.\n  ,--> input.scss\n2 | a {b: math.atan2()}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function atan2($y, $x) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/one_arg/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0)}\n',
  },
  {
    name: 'error/one_arg/error',
    data: "Error: Missing argument $x.\n  ,--> input.scss\n2 | a {b: math.atan2(0)}\n  |       ^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function atan2($y, $x) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.atan2(0, 0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: math.atan2(0, 0, 0)}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function atan2($y, $x) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
