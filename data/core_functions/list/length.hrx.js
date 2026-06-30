// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/length.hrx

export default [
  {
    name: '0/input.scss',
    data: '@use "sass:list";\na {b: list.length(())}\n',
  },
  {
    name: '0/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: '1/input.scss',
    data: '@use "sass:list";\na {b: list.length(list.join((), 1))}\n',
  },
  {
    name: '1/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: '2/input.scss',
    data: '@use "sass:list";\na {b: list.length(c d)}\n',
  },
  {
    name: '2/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'many/input.scss',
    data: '@use "sass:list";\na {b: list.length((1, 2, 3, 4, 5))}\n',
  },
  {
    name: 'many/output.css',
    data: 'a {\n  b: 5;\n}\n',
  },
  {
    name: 'map/empty/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.length(utils.$empty-map)}\n',
  },
  {
    name: 'map/empty/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'map/non_empty/input.scss',
    data: '@use "sass:list";\na {b: list.length((1: 2, 3: 4))}\n',
  },
  {
    name: 'map/non_empty/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'non_list/input.scss',
    data: '@use "sass:list";\na {b: list.length(c)}\n',
  },
  {
    name: 'non_list/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'null_list_item/input.scss',
    data: '@use "sass:list";\n// regression test for scssphp/scssphp#403\na {b: list.length((null))}\n',
  },
  {
    name: 'null_list_item/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:list";\na {b: list.length($list: 1 2 3)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.length()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $list.\n  ,--> input.scss\n2 | a {b: list.length()}\n  |       ^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function length($list) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.length(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: list.length(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function length($list) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
