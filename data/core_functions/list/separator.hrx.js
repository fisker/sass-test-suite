export default [
  {
    name: 'empty/space/input.scss',
    data: '@use "sass:list";\na {b: list.separator(())}\n',
  },
  {
    name: 'empty/space/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'empty/comma/input.scss',
    data: '@use "sass:list";\na {b: list.separator(list.join((), (), comma))}\n',
  },
  {
    name: 'empty/comma/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'empty/map/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\n\na {b: list.separator(utils.$empty-map)}\n',
  },
  {
    name: 'empty/map/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'single/space/input.scss',
    data: '@use "sass:list";\na {b: list.separator([1])}\n',
  },
  {
    name: 'single/space/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'single/comma/input.scss',
    data: '@use "sass:list";\na {b: list.separator((1,))}\n',
  },
  {
    name: 'single/comma/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'single/slash/input.scss',
    data: '@use "sass:list";\na {b: list.separator(list.join(1, (), $separator: slash))}\n',
  },
  {
    name: 'single/slash/output.css',
    data: 'a {\n  b: slash;\n}\n',
  },
  {
    name: 'single/non_list/input.scss',
    data: '@use "sass:list";\na {b: list.separator(1)}\n',
  },
  {
    name: 'single/non_list/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'multi/space/input.scss',
    data: '@use "sass:list";\na {b: list.separator(1 2 3)}\n',
  },
  {
    name: 'multi/space/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'multi/comma/input.scss',
    data: '@use "sass:list";\na {b: list.separator((1, 2, 3))}\n',
  },
  {
    name: 'multi/comma/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'multi/slash/input.scss',
    data: "@use 'sass:list';\na {b: list.separator(list.slash(1, 2, 3))}\n",
  },
  {
    name: 'multi/slash/output.css',
    data: 'a {\n  b: slash;\n}\n',
  },
  {
    name: 'multi/map/input.scss',
    data: '@use "sass:list";\na {b: list.separator((c: d, e: f, g: h))}\n',
  },
  {
    name: 'multi/map/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'bracketed/input.scss',
    data: '@use "sass:list";\na {b: list.separator([c, d])}\n',
  },
  {
    name: 'bracketed/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.separator()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $list.\n  ,--> input.scss\n2 | a {b: list.separator()}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function separator($list) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:list";\na {b: list.separator(c, d)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: list.separator(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:list\n1 | @function separator($list) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
