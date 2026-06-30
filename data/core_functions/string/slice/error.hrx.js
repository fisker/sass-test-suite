// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/slice/error.hrx

export default [
  {
    name: 'type/string/input.scss',
    data: '@use "sass:string";\na {b: string.slice(1, 2)}\n',
  },
  {
    name: 'type/string/error',
    data: "Error: $string: 1 is not a string.\n  ,\n2 | a {b: string.slice(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/start_at/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", "f")}\n',
  },
  {
    name: 'type/start_at/error',
    data: 'Error: $start-at: "f" is not a number.\n  ,\n2 | a {b: string.slice("cde", "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/end_at/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, "f")}\n',
  },
  {
    name: 'type/end_at/error',
    data: 'Error: $end-at: "f" is not a number.\n  ,\n2 | a {b: string.slice("cde", 1, "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'decimal/start/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 0.5)}\n',
  },
  {
    name: 'decimal/start/error',
    data: 'Error: 0.5 is not an int.\n  ,\n2 | a {b: string.slice("", 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'decimal/end/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 1, 1.5)}\n',
  },
  {
    name: 'decimal/end/error',
    data: 'Error: 1.5 is not an int.\n  ,\n2 | a {b: string.slice("", 1, 1.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'unit/start/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 1px)}\n',
  },
  {
    name: 'unit/start/error',
    data: 'Error: $start-at: Expected 1px to have no units.\n  ,\n2 | a {b: string.slice("", 1px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'unit/end/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 1, 2px)}\n',
  },
  {
    name: 'unit/end/error',
    data: 'Error: $end-at: Expected 2px to have no units.\n  ,\n2 | a {b: string.slice("", 1, 2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong_name/input.scss',
    data: '@use "sass:string";\na {b: string.str-slice("c", 1, 1)}\n',
  },
  {
    name: 'wrong_name/error',
    data: 'Error: Undefined function.\n  ,\n2 | a {b: string.str-slice("c", 1, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde")}\n',
  },
  {
    name: 'too_few_args/error',
    data: 'Error: Missing argument $start-at.\n  ,--> input.scss\n2 | a {b: string.slice("cde")}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function slice($string, $start-at, $end-at: -1) {\n  |           ====================================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, 2, 3)}\n',
  },
  {
    name: 'too_many_args/error',
    data: 'Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: string.slice("cde", 1, 2, 3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function slice($string, $start-at, $end-at: -1) {\n  |           ====================================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
