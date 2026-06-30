export default [
  {
    name: '1/of_1/input.scss',
    data: '@use "sass:list";\na {b: list.nth(list.join((), c), 1)}\n',
  },
  {
    name: '1/of_1/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: '1/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, 1)}\n',
  },
  {
    name: '1/of_2/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: '2/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, 2)}\n',
  },
  {
    name: '2/of_2/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: '2/of_4/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d e f, 2)}\n',
  },
  {
    name: '2/of_4/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'negative/1/of_1/input.scss',
    data: '@use "sass:list";\na {b: list.nth(list.join((), c), -1)}\n',
  },
  {
    name: 'negative/1/of_1/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'negative/1/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, -1)}\n',
  },
  {
    name: 'negative/1/of_2/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'negative/2/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, -2)}\n',
  },
  {
    name: 'negative/2/of_2/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'negative/2/of_4/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d e f, -2)}\n',
  },
  {
    name: 'negative/2/of_4/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'map/input.scss',
    data: '@use "sass:list";\na {b: list.nth((c: d, e: f, g: h), 2)}\n',
  },
  {
    name: 'map/output.css',
    data: 'a {\n  b: e f;\n}\n',
  },
  {
    name: 'non_list/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c, 1)}\n',
  },
  {
    name: 'non_list/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:list";\na {b: list.nth($list: c d, $n: 1)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'bracketed/input.scss',
    data: '@use "sass:list";\na {b: list.nth([c, d], 2)}\n',
  },
  {
    name: 'bracketed/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'units/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, 1px)}\n',
  },
  {
    name: 'units/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'units/warning',
    data: "DEPRECATION WARNING [function-units]: $n: Passing a number with unit px is deprecated.\n\nTo preserve current behavior: calc($n / 1px)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: list.nth(c d, 1px)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, e)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $n: e is not a number.\n  ,\n2 | a {b: list.nth(c d, e)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/0/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, 0)}\n',
  },
  {
    name: 'error/index/0/error',
    data: "Error: $n: List index may not be 0.\n  ,\n2 | a {b: list.nth(c d, 0)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/too_high/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, 3)}\n',
  },
  {
    name: 'error/index/too_high/error',
    data: "Error: $n: Invalid index 3 for a list with 2 elements.\n  ,\n2 | a {b: list.nth(c d, 3)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/too_low/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, -3)}\n',
  },
  {
    name: 'error/index/too_low/error',
    data: "Error: $n: Invalid index -3 for a list with 2 elements.\n  ,\n2 | a {b: list.nth(c d, -3)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $n.\n  ,--> input.scss\n2 | a {b: list.nth(c d)}\n  |       ^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function nth($list, $n) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.nth(c d, 1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: list.nth(c d, 1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function nth($list, $n) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
