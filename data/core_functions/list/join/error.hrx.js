// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/join/error.hrx

export default [
  {
    name: 'README.md',
    data: '`join()` is unique in that it takes multiple optional arguments that can be\npassed independently of one another. This may necessitate unusual\nimplementation, so we go out of our way to verify that it disallows unusual\ninvalid calls.\n',
  },
  {
    name: 'type/separator/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $separator: 1)}\n',
  },
  {
    name: 'type/separator/error',
    data: "Error: $separator: 1 is not a string.\n  ,\n2 | a {b: list.join(c, d, $separator: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, comma, true, false)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 4 arguments allowed, but 5 were passed.\n  ,--> input.scss\n2 | a {b: list.join(c, d, comma, true, false)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function join($list1, $list2, $separator: auto, $bracketed: auto) {\n  |           ======================================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.join(c)}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $list2.\n  ,--> input.scss\n2 | a {b: list.join(c)}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function join($list1, $list2, $separator: auto, $bracketed: auto) {\n  |           ======================================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $invalid: true)}\n',
  },
  {
    name: 'named/error',
    data: "Error: No parameter named $invalid.\n  ,--> input.scss\n2 | a {b: list.join(c, d, $invalid: true)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function join($list1, $list2, $separator: auto, $bracketed: auto) {\n  |           ======================================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'positional_and_named/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, comma, true, false, $invalid: true)}\n',
  },
  {
    name: 'positional_and_named/error',
    data: "Error: Only 4 positional arguments allowed, but 5 were passed.\n  ,--> input.scss\n2 | a {b: list.join(c, d, comma, true, false, $invalid: true)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function join($list1, $list2, $separator: auto, $bracketed: auto) {\n  |           ======================================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'unknown_separator/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $separator: e)}\n',
  },
  {
    name: 'unknown_separator/error',
    data: 'Error: $separator: Must be "space", "comma", "slash", or "auto".\n  ,\n2 | a {b: list.join(c, d, $separator: e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
