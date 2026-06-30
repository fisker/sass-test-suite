export default [
  {
    name: '1/of_1/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: list.set-nth(list.join((), b), 1, c);\na {\n  result: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: '1/of_1/output.css',
    data: 'a {\n  result: c;\n  type: list;\n}\n',
  },
  {
    name: '1/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, 1, e)}\n',
  },
  {
    name: '1/of_2/output.css',
    data: 'a {\n  b: e d;\n}\n',
  },
  {
    name: '2/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, 2, e)}\n',
  },
  {
    name: '2/of_2/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: '2/of_4/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d e f, 2, g)}\n',
  },
  {
    name: '2/of_4/output.css',
    data: 'a {\n  b: c g e f;\n}\n',
  },
  {
    name: 'negative/1/of_1/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: list.set-nth(list.join((), b), -1, c);\na {\n  result: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'negative/1/of_1/output.css',
    data: 'a {\n  result: c;\n  type: list;\n}\n',
  },
  {
    name: 'negative/1/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, -1, e)}\n',
  },
  {
    name: 'negative/1/of_2/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'negative/2/of_2/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, -2, e)}\n',
  },
  {
    name: 'negative/2/of_2/output.css',
    data: 'a {\n  b: e d;\n}\n',
  },
  {
    name: 'negative/2/of_4/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d e f, -2, g)}\n',
  },
  {
    name: 'negative/2/of_4/output.css',
    data: 'a {\n  b: c d g f;\n}\n',
  },
  {
    name: 'map/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth((c: d, e: f, g: h), 2, i)}\n',
  },
  {
    name: 'map/output.css',
    data: 'a {\n  b: c d, i, g h;\n}\n',
  },
  {
    name: 'non_list/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: list.set-nth(b, 1, c);\na {\n  result: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'non_list/output.css',
    data: 'a {\n  result: c;\n  type: list;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth($list: c d, $n: 1, $value: e)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: e d;\n}\n',
  },
  {
    name: 'bracketed/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth([c, d], 2, e)}\n',
  },
  {
    name: 'bracketed/output.css',
    data: 'a {\n  b: [c, e];\n}\n',
  },
  {
    name: 'units/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, 1px, e)}\n',
  },
  {
    name: 'units/output.css',
    data: 'a {\n  b: e d;\n}\n',
  },
  {
    name: 'units/warning',
    data: "DEPRECATION WARNING [function-units]: $n: Passing a number with unit px is deprecated.\n\nTo preserve current behavior: calc($n / 1px)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: list.set-nth(c d, 1px, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, e, f)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $n: e is not a number.\n  ,\n2 | a {b: list.set-nth(c d, e, f)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/0/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, 0, e)}\n',
  },
  {
    name: 'error/index/0/error',
    data: "Error: $n: List index may not be 0.\n  ,\n2 | a {b: list.set-nth(c d, 0, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/too_high/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, 3, e)}\n',
  },
  {
    name: 'error/index/too_high/error',
    data: "Error: $n: Invalid index 3 for a list with 2 elements.\n  ,\n2 | a {b: list.set-nth(c d, 3, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/too_low/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, -3, e)}\n',
  },
  {
    name: 'error/index/too_low/error',
    data: "Error: $n: Invalid index -3 for a list with 2 elements.\n  ,\n2 | a {b: list.set-nth(c d, -3, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, 1)}\n',
  },
  {
    name: 'error/index/too_few_args/error',
    data: "Error: Missing argument $value.\n  ,--> input.scss\n2 | a {b: list.set-nth(c d, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function set-nth($list, $n, $value) {\n  |           ========================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/index/too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.set-nth(c d, 1, 2, 3)}\n',
  },
  {
    name: 'error/index/too_many_args/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: list.set-nth(c d, 1, 2, 3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function set-nth($list, $n, $value) {\n  |           ========================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
