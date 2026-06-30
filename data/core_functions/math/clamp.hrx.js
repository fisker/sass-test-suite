// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/clamp.hrx

export default [
  {
    name: 'chooses_min/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(1, 0, 2)}\n',
  },
  {
    name: 'chooses_min/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'chooses_number/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0, 1, 2)}\n',
  },
  {
    name: 'chooses_number/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'chooses_max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0, 2, 1)}\n',
  },
  {
    name: 'chooses_max/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'min_equals_max/input.scss',
    data: '@use "sass:math";\na {\n  b: math.clamp(1, 2, 1);\n}\n',
  },
  {
    name: 'min_equals_max/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'min_greater_than_max/input.scss',
    data: '@use "sass:math";\na {\n  b: math.clamp(1, 2, 0);\n}\n',
  },
  {
    name: 'min_greater_than_max/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'preserves_units/min/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(180deg, 0.5turn, 360deg)}\n',
  },
  {
    name: 'preserves_units/min/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'preserves_units/number/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(180deg, 0.75turn, 360deg)}\n',
  },
  {
    name: 'preserves_units/number/output.css',
    data: 'a {\n  b: 0.75turn;\n}\n',
  },
  {
    name: 'preserves_units/max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(180deg, 1turn, 360deg)}\n',
  },
  {
    name: 'preserves_units/max/output.css',
    data: 'a {\n  b: 360deg;\n}\n',
  },
  {
    name: 'named_args/input.scss',
    data: '@use "sass:math";\na {b: math.clamp($min: 0, $number: 1, $max: 2)}\n',
  },
  {
    name: 'named_args/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/type/min/input.scss',
    data: '@use "sass:math";\na {b: math.clamp("0", 1, 2)}\n',
  },
  {
    name: 'error/type/min/error',
    data: 'Error: $min: "0" is not a number.\n  ,\n2 | a {b: math.clamp("0", 1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/number/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(1, "0", 2)}\n',
  },
  {
    name: 'error/type/number/error',
    data: 'Error: $number: "0" is not a number.\n  ,\n2 | a {b: math.clamp(1, "0", 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(1, 2, "0")}\n',
  },
  {
    name: 'error/type/max/error',
    data: 'Error: $max: "0" is not a number.\n  ,\n2 | a {b: math.clamp(1, 2, "0")}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/incompatible_units/min_and_number/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(1deg, 1px, 1turn)}\n',
  },
  {
    name: 'error/incompatible_units/min_and_number/error',
    data: "Error: $number: 1px and $min: 1deg have incompatible units.\n  ,\n2 | a {b: math.clamp(1deg, 1px, 1turn)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/min_and_max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(1deg, 1turn, 1px)}\n',
  },
  {
    name: 'error/incompatible_units/min_and_max/error',
    data: "Error: $max: 1px and $min: 1deg have incompatible units.\n  ,\n2 | a {b: math.clamp(1deg, 1turn, 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/number_and_max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(1turn, 1deg, 1px)}\n',
  },
  {
    name: 'error/incompatible_units/number_and_max/error',
    data: "Error: $max: 1px and $min: 1turn have incompatible units.\n  ,\n2 | a {b: math.clamp(1turn, 1deg, 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/all/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(1deg, 1px, 1s)}\n',
  },
  {
    name: 'error/incompatible_units/all/error',
    data: "Error: $number: 1px and $min: 1deg have incompatible units.\n  ,\n2 | a {b: math.clamp(1deg, 1px, 1s)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/min/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0, 1px, 2px)}\n',
  },
  {
    name: 'error/some_unitless/min/error',
    data: "Error: $number: 1px and $min: 0 have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.clamp(0, 1px, 2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/number/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0px, 1, 2px)}\n',
  },
  {
    name: 'error/some_unitless/number/error',
    data: "Error: $number: 1 and $min: 0px have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.clamp(0px, 1, 2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0px, 1px, 2)}\n',
  },
  {
    name: 'error/some_unitless/max/error',
    data: "Error: $max: 2 and $min: 0px have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.clamp(0px, 1px, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/min_and_number/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0, 1, 2px)}\n',
  },
  {
    name: 'error/some_unitless/min_and_number/error',
    data: "Error: $max: 2px and $min: 0 have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.clamp(0, 1, 2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/min_and_max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0, 1px, 2)}\n',
  },
  {
    name: 'error/some_unitless/min_and_max/error',
    data: "Error: $number: 1px and $min: 0 have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.clamp(0, 1px, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/number_and_max/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0px, 1, 2)}\n',
  },
  {
    name: 'error/some_unitless/number_and_max/error',
    data: "Error: $number: 1 and $min: 0px have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.clamp(0px, 1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.clamp()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $min.\n  ,--> input.scss\n2 | a {b: math.clamp()}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function clamp($min, $number, $max) {\n  |           ========================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/one_arg/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0)}\n',
  },
  {
    name: 'error/one_arg/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.clamp(0)}\n  |       ^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function clamp($min, $number, $max) {\n  |           ========================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/two_args/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0, 0)}\n',
  },
  {
    name: 'error/two_args/error',
    data: "Error: Missing argument $max.\n  ,--> input.scss\n2 | a {b: math.clamp(0, 0)}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function clamp($min, $number, $max) {\n  |           ========================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.clamp(0, 0, 0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: math.clamp(0, 0, 0, 0)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function clamp($min, $number, $max) {\n  |           ========================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
