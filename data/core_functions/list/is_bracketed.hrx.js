// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/is_bracketed.hrx

export default [
  {
    name: 'unbracketed/empty/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed(())}\n',
  },
  {
    name: 'unbracketed/empty/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unbracketed/single/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed((1,))}\n',
  },
  {
    name: 'unbracketed/single/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unbracketed/multi/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed(1 2 3)}\n',
  },
  {
    name: 'unbracketed/multi/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unbracketed/non_list/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed(1)}\n',
  },
  {
    name: 'unbracketed/non_list/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unbracketed/map/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed((c: d, e: f, g: h))}\n',
  },
  {
    name: 'unbracketed/map/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'bracketed/empty/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed([])}\n',
  },
  {
    name: 'bracketed/empty/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'bracketed/single/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed([1])}\n',
  },
  {
    name: 'bracketed/single/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'bracketed/multi/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed([1, 2, 3])}\n',
  },
  {
    name: 'bracketed/multi/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $list.\n  ,--> input.scss\n2 | a {b: list.is-bracketed()}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function is-bracketed($list) {\n  |           =================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.is-bracketed(a b, c d)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: list.is-bracketed(a b, c d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function is-bracketed($list) {\n  |           =================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
