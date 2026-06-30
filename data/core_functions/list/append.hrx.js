// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/append.hrx

export default [
  {
    name: 'empty/undecided/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.append((), 1);\na {\n  value: $result;\n  type: meta.type-of($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'empty/undecided/output.css',
    data: 'a {\n  value: 1;\n  type: list;\n  separator: space;\n}\n',
  },
  {
    name: 'empty/space/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.append(utils.$empty-space-list, 1);\na {\n  value: $result;\n  type: meta.type-of($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'empty/space/output.css',
    data: 'a {\n  value: 1;\n  type: list;\n  separator: space;\n}\n',
  },
  {
    name: 'empty/comma/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.append(utils.$empty-comma-list, 1);\na {\n  value: $result;\n  type: meta.type-of($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'empty/comma/output.css',
    data: 'a {\n  value: 1;\n  type: list;\n  separator: comma;\n}\n',
  },
  {
    name: 'single/undecided/input.scss',
    data: '@use "sass:list";\na {b: list.append(1, 2)}\n',
  },
  {
    name: 'single/undecided/output.css',
    data: 'a {\n  b: 1 2;\n}\n',
  },
  {
    name: 'single/space/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.append(utils.with-separator(1, space), 2)}\n',
  },
  {
    name: 'single/space/output.css',
    data: 'a {\n  b: 1 2;\n}\n',
  },
  {
    name: 'single/comma/input.scss',
    data: '@use "sass:list";\na {b: list.append((1,), 2)}\n',
  },
  {
    name: 'single/comma/output.css',
    data: 'a {\n  b: 1, 2;\n}\n',
  },
  {
    name: 'space/default/input.scss',
    data: '@use "sass:list";\na {b: list.append(1 2 3, 4)}\n',
  },
  {
    name: 'space/default/output.css',
    data: 'a {\n  b: 1 2 3 4;\n}\n',
  },
  {
    name: 'space/overridden/input.scss',
    data: '@use "sass:list";\na {b: list.append((1, 2, 3), 4, $separator: space)}\n',
  },
  {
    name: 'space/overridden/output.css',
    data: 'a {\n  b: 1 2 3 4;\n}\n',
  },
  {
    name: 'comma/default/input.scss',
    data: '@use "sass:list";\na {b: list.append((1, 2, 3), 4)}\n',
  },
  {
    name: 'comma/default/output.css',
    data: 'a {\n  b: 1, 2, 3, 4;\n}\n',
  },
  {
    name: 'comma/overridden/input.scss',
    data: '@use "sass:list";\na {b: list.append(1 2 3, 4, $separator: comma)}\n',
  },
  {
    name: 'comma/overridden/output.css',
    data: 'a {\n  b: 1, 2, 3, 4;\n}\n',
  },
  {
    name: 'slash/default/input.scss',
    data: '@use "sass:list";\na {b: list.append(list.slash(c, d), e)}\n',
  },
  {
    name: 'slash/default/output.css',
    data: 'a {\n  b: c / d / e;\n}\n',
  },
  {
    name: 'slash/overridden/input.scss',
    data: '@use "sass:list";\na {b: list.append(c d, e, $separator: slash)}\n',
  },
  {
    name: 'slash/overridden/output.css',
    data: 'a {\n  b: c / d / e;\n}\n',
  },
  {
    name: 'bracketed/input.scss',
    data: '@use "sass:list";\na {b: list.append([], 1)}\n',
  },
  {
    name: 'bracketed/output.css',
    data: 'a {\n  b: [1];\n}\n',
  },
  {
    name: 'map/empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.append(utils.$empty-map, 1);\na {\n  value: $result;\n  type: meta.type-of($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'map/empty/output.css',
    data: 'a {\n  value: 1;\n  type: list;\n  separator: space;\n}\n',
  },
  {
    name: 'map/non_empty/input.scss',
    data: '@use "sass:list";\na {b: list.append((c: d, e: f), g)}\n',
  },
  {
    name: 'map/non_empty/output.css',
    data: 'a {\n  b: c d, e f, g;\n}\n',
  },
  {
    name: 'non_list/input.scss',
    data: '@use "sass:list";\na {b: list.append(c, d)}\n',
  },
  {
    name: 'non_list/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'auto/input.scss',
    data: '@use "sass:list";\na {b: list.append(c d, e, $separator: auto)}\n',
  },
  {
    name: 'auto/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:list";\na {b: list.append($list: c d, $val: e, $separator: comma)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: c, d, e;\n}\n',
  },
  {
    name: 'error/type/separator/input.scss',
    data: '@use "sass:list";\na {b: list.append(c, d, $separator: 1)}\n',
  },
  {
    name: 'error/type/separator/error',
    data: "Error: $separator: 1 is not a string.\n  ,\n2 | a {b: list.append(c, d, $separator: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.append(c, d, comma, e)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: list.append(c, d, comma, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function append($list, $val, $separator: auto) {\n  |           ===================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.append(c)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $val.\n  ,--> input.scss\n2 | a {b: list.append(c)}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function append($list, $val, $separator: auto) {\n  |           ===================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/unknown_separator/input.scss',
    data: '@use "sass:list";\na {b: list.append(c, d, $separator: e)}\n',
  },
  {
    name: 'error/unknown_separator/error',
    data: 'Error: $separator: Must be "space", "comma", "slash", or "auto".\n  ,\n2 | a {b: list.append(c, d, $separator: e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
