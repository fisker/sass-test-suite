// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/index.hrx

export default [
  {
    name: 'found/single/input.scss',
    data: '@use "sass:list";\na {b: list.index([c], c)}\n',
  },
  {
    name: 'found/single/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'found/first/input.scss',
    data: '@use "sass:list";\na {b: list.index(a b c, a)}\n',
  },
  {
    name: 'found/first/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'found/last/input.scss',
    data: '@use "sass:list";\na {b: list.index(a b c, c)}\n',
  },
  {
    name: 'found/last/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'found/sass_equality/input.scss',
    data: '@use "sass:list";\na {b: list.index(1px 1in 1cm, 96px)}\n',
  },
  {
    name: 'found/sass_equality/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'found/multiple/input.scss',
    data: '@use "sass:list";\na {b: list.index(a b c a b c, b)}\n',
  },
  {
    name: 'found/multiple/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'found/map/input.scss',
    data: '@use "sass:list";\na {b: list.index((c: d, e: f, g: h), e f)}\n',
  },
  {
    name: 'found/map/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'found/non_list/input.scss',
    data: '@use "sass:list";\na {b: list.index(c, c)}\n',
  },
  {
    name: 'found/non_list/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'not_found/empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.index((), c))}\n',
  },
  {
    name: 'not_found/empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'not_found/non_empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.index(c d e, f))}\n',
  },
  {
    name: 'not_found/non_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'not_found/map/empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\na {b: meta.inspect(list.index(utils.$empty-map, e))}\n',
  },
  {
    name: 'not_found/map/empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'not_found/map/non_empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.index((c: d, e: f, g: h), e))}\n',
  },
  {
    name: 'not_found/map/non_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'not_found/non_list/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.index(c, d))}\n',
  },
  {
    name: 'not_found/non_list/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:list";\na {b: list.index($list: c d e, $value: d)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.index(c d e)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $value.\n  ,--> input.scss\n2 | a {b: list.index(c d e)}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function index($list, $value) {\n  |           ==================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.index(c d e, d, e)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: list.index(c d e, d, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function index($list, $value) {\n  |           ==================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
