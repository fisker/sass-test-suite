// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/math/percentage.hrx

export default [
  {
    name: 'zero/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0%;\n}\n',
  },
  {
    name: 'small/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(0.246)}\n',
  },
  {
    name: 'small/output.css',
    data: 'a {\n  b: 24.6%;\n}\n',
  },
  {
    name: 'large/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(123.456)}\n',
  },
  {
    name: 'large/output.css',
    data: 'a {\n  b: 12345.6%;\n}\n',
  },
  {
    name: 'integer/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(42)}\n',
  },
  {
    name: 'integer/output.css',
    data: 'a {\n  b: 4200%;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(-0.4)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -40%;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\na {b: math.percentage($number: 1)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 100%;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $number: c is not a number.\n  ,\n2 | a {b: math.percentage(c)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/unit/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(1%)}\n',
  },
  {
    name: 'error/unit/error',
    data: "Error: $number: Expected 1% to have no units.\n  ,\n2 | a {b: math.percentage(1%)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:math";\na {b: math.percentage()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $number.\n  ,--> input.scss\n2 | a {b: math.percentage()}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function percentage($number) {\n  |           =================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:math";\na {b: math.percentage(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: math.percentage(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function percentage($number) {\n  |           =================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
