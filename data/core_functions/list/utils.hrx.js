export default [
  {
    name: 'README.md',
    data: 'These tests verify that `_utils.scss` works as intended.\n',
  },
  {
    name: 'real_separator/empty/undecided/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator(())}\n',
  },
  {
    name: 'real_separator/empty/undecided/output.css',
    data: 'a {\n  b: undecided;\n}\n',
  },
  {
    name: 'real_separator/empty/space/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator(utils.$empty-space-list)}\n',
  },
  {
    name: 'real_separator/empty/space/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'real_separator/empty/comma/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator(utils.$empty-comma-list)}\n',
  },
  {
    name: 'real_separator/empty/comma/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'real_separator/single/undecided/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator([1])}\n',
  },
  {
    name: 'real_separator/single/undecided/output.css',
    data: 'a {\n  b: undecided;\n}\n',
  },
  {
    name: 'real_separator/single/comma/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator((1,))}\n',
  },
  {
    name: 'real_separator/single/comma/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'real_separator/multi/space/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator(1 2)}\n',
  },
  {
    name: 'real_separator/multi/space/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'real_separator/multi/comma/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator((1, 2))}\n',
  },
  {
    name: 'real_separator/multi/comma/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'with_separator/single/space/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator(utils.with-separator((1,), space))}\n',
  },
  {
    name: 'with_separator/single/space/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'with_separator/single/comma/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.real-separator(utils.with-separator([1], comma))}\n',
  },
  {
    name: 'with_separator/single/comma/output.css',
    data: 'a {\n  b: comma;\n}\n',
  },
  {
    name: 'with_separator/multi/space/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.with-separator((1, 2), space)}\n',
  },
  {
    name: 'with_separator/multi/space/output.css',
    data: 'a {\n  b: 1 2;\n}\n',
  },
  {
    name: 'with_separator/multi/comma/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.with-separator(1 2, comma)}\n',
  },
  {
    name: 'with_separator/multi/comma/output.css',
    data: 'a {\n  b: 1, 2;\n}\n',
  },
  {
    name: 'empty_map/same_as_empty_list/input.scss',
    data: '@use "core_functions/list/utils";\na {b: utils.$empty-map == ()}\n',
  },
  {
    name: 'empty_map/same_as_empty_list/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
