// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/hypot.hrx

export default [
  {
    name: 'unitless/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(3, 4, 5, 6, 7)}\n',
  },
  {
    name: 'unitless/output.css',
    data: 'a {\n  b: 11.6189500386;\n}\n',
  },
  {
    name: 'compatible_units/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(3cm, 4mm * 10, 5q * 40, math.div(6in, 2.54), 7px * math.div(96, 2.54))}\n',
  },
  {
    name: 'compatible_units/output.css',
    data: 'a {\n  b: 11.6189500386cm;\n}\n',
  },
  {
    name: 'infinity/first/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(math.div(1, 0), 1, 1)}\n',
  },
  {
    name: 'infinity/first/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'infinity/second/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1, math.div(1, 0), 1)}\n',
  },
  {
    name: 'infinity/second/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'infinity/third/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1, 1, math.div(1, 0))}\n',
  },
  {
    name: 'infinity/third/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'error/type/first/input.scss',
    data: '@use "sass:math";\na {b: math.hypot("0", 1px, 1px)}\n',
  },
  {
    name: 'error/type/first/error',
    data: 'Error: "0" is not a number.\n  ,\n2 | a {b: math.hypot("0", 1px, 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/second/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1px, "0", 1px)}\n',
  },
  {
    name: 'error/type/second/error',
    data: 'Error: "0" is not a number.\n  ,\n2 | a {b: math.hypot(1px, "0", 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/third/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1px, 1px, "0")}\n',
  },
  {
    name: 'error/type/third/error',
    data: 'Error: "0" is not a number.\n  ,\n2 | a {b: math.hypot(1px, 1px, "0")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/incompatible_units/first_and_second/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1deg, 1px, 1turn)}\n',
  },
  {
    name: 'error/incompatible_units/first_and_second/error',
    data: "Error: $numbers[2]: 1px and $numbers[1]: 1deg have incompatible units.\n  ,\n2 | a {b: math.hypot(1deg, 1px, 1turn)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/first_and_third/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1deg, 1turn, 1px)}\n',
  },
  {
    name: 'error/incompatible_units/first_and_third/error',
    data: "Error: $numbers[3]: 1px and $numbers[1]: 1deg have incompatible units.\n  ,\n2 | a {b: math.hypot(1deg, 1turn, 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/second_and_third/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1turn, 1deg, 1px)}\n',
  },
  {
    name: 'error/incompatible_units/second_and_third/error',
    data: "Error: $numbers[3]: 1px and $numbers[1]: 1turn have incompatible units.\n  ,\n2 | a {b: math.hypot(1turn, 1deg, 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/all/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(1turn, 1px, 1s)}\n',
  },
  {
    name: 'error/incompatible_units/all/error',
    data: "Error: $numbers[2]: 1px and $numbers[1]: 1turn have incompatible units.\n  ,\n2 | a {b: math.hypot(1turn, 1px, 1s)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/first/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(0, 1px, 2px)}\n',
  },
  {
    name: 'error/some_unitless/first/error',
    data: "Error: $numbers[2]: 1px and $numbers[1]: 0 have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.hypot(0, 1px, 2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/second/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(0px, 1, 2px)}\n',
  },
  {
    name: 'error/some_unitless/second/error',
    data: "Error: $numbers[2]: 1 and $numbers[1]: 0px have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.hypot(0px, 1, 2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/third/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(0px, 1px, 2)}\n',
  },
  {
    name: 'error/some_unitless/third/error',
    data: "Error: $numbers[3]: 2 and $numbers[1]: 0px have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.hypot(0px, 1px, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/first_and_second/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(0, 1, 2px)}\n',
  },
  {
    name: 'error/some_unitless/first_and_second/error',
    data: "Error: $numbers[3]: 2px and $numbers[1]: 0 have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.hypot(0, 1, 2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/first_and_third/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(0, 1px, 2)}\n',
  },
  {
    name: 'error/some_unitless/first_and_third/error',
    data: "Error: $numbers[2]: 1px and $numbers[1]: 0 have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.hypot(0, 1px, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/some_unitless/second_and_third/input.scss',
    data: '@use "sass:math";\na {b: math.hypot(0px, 1, 2)}\n',
  },
  {
    name: 'error/some_unitless/second_and_third/error',
    data: "Error: $numbers[2]: 1 and $numbers[1]: 0px have incompatible units (one has units and the other doesn't).\n  ,\n2 | a {b: math.hypot(0px, 1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:math";\na {b: math.hypot()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: At least one argument must be passed.\n  ,\n2 | a {b: math.hypot()}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
