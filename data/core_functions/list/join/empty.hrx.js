export default [
  {
    name: 'both/undecided/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join((), ());\na {\n  value: meta.inspect($result);\n\n  // `join()` should always produce a real separator, even when the inputs have\n  // undecided separators. It should default to `space`.\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'both/undecided/output.css',
    data: 'a {\n  value: ();\n  separator: space;\n}\n',
  },
  {
    name: 'both/space/first/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join(utils.$empty-space-list, ());\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'both/space/first/output.css',
    data: 'a {\n  value: ();\n  separator: space;\n}\n',
  },
  {
    name: 'both/space/last/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join((), utils.$empty-space-list);\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'both/space/last/output.css',
    data: 'a {\n  value: ();\n  separator: space;\n}\n',
  },
  {
    name: 'both/comma/first/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join(utils.$empty-comma-list, ());\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'both/comma/first/output.css',
    data: 'a {\n  value: ();\n  separator: comma;\n}\n',
  },
  {
    name: 'both/comma/last/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join((), utils.$empty-comma-list);\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'both/comma/last/output.css',
    data: 'a {\n  value: ();\n  separator: comma;\n}\n',
  },
  {
    name: 'both/slash/first/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$empty-slash-list: list.join((), (), $separator: slash);\n$result: list.join($empty-slash-list, ());\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'both/slash/first/output.css',
    data: 'a {\n  value: ();\n  separator: slash;\n}\n',
  },
  {
    name: 'both/slash/last/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$empty-slash-list: list.join((), (), $separator: slash);\n$result: list.join((), $empty-slash-list);\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'both/slash/last/output.css',
    data: 'a {\n  value: ();\n  separator: slash;\n}\n',
  },
  {
    name: 'first/undecided/and_space/input.scss',
    data: '@use "sass:list";\na {b: list.join((), 1 2 3)}\n',
  },
  {
    name: 'first/undecided/and_space/output.css',
    data: 'a {\n  b: 1 2 3;\n}\n',
  },
  {
    name: 'first/undecided/and_comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((), (1, 2, 3))}\n',
  },
  {
    name: 'first/undecided/and_comma/output.css',
    data: 'a {\n  b: 1, 2, 3;\n}\n',
  },
  {
    name: 'first/undecided/and_slash/input.scss',
    data: '@use "sass:list";\na {b: list.join((), list.slash(1, 2, 3))}\n',
  },
  {
    name: 'first/undecided/and_slash/output.css',
    data: 'a {\n  b: 1 / 2 / 3;\n}\n',
  },
  {
    name: 'first/space/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(utils.$empty-space-list, (1, 2, 3))}\n',
  },
  {
    name: 'first/space/output.css',
    data: 'a {\n  b: 1 2 3;\n}\n',
  },
  {
    name: 'first/comma/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(utils.$empty-comma-list, 1 2 3)}\n',
  },
  {
    name: 'first/comma/output.css',
    data: 'a {\n  b: 1, 2, 3;\n}\n',
  },
  {
    name: 'first/slash/input.scss',
    data: '@use "sass:list";\n$empty-slash-list: list.join((), (), $separator: slash);\na {b: list.join($empty-slash-list, 1 2 3)}\n',
  },
  {
    name: 'first/slash/output.css',
    data: 'a {\n  b: 1 / 2 / 3;\n}\n',
  },
  {
    name: 'second/undecided/space/input.scss',
    data: '@use "sass:list";\na {b: list.join(1 2 3, ())}\n',
  },
  {
    name: 'second/undecided/space/output.css',
    data: 'a {\n  b: 1 2 3;\n}\n',
  },
  {
    name: 'second/undecided/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((1, 2, 3), ())}\n',
  },
  {
    name: 'second/undecided/comma/output.css',
    data: 'a {\n  b: 1, 2, 3;\n}\n',
  },
  {
    name: 'second/undecided/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.slash(1, 2, 3), ())}\n',
  },
  {
    name: 'second/undecided/slash/output.css',
    data: 'a {\n  b: 1 / 2 / 3;\n}\n',
  },
  {
    name: 'second/space/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join((1, 2, 3), utils.$empty-space-list)}\n',
  },
  {
    name: 'second/space/output.css',
    data: 'a {\n  b: 1, 2, 3;\n}\n',
  },
  {
    name: 'second/comma/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(1 2 3, utils.$empty-comma-list)}\n',
  },
  {
    name: 'second/comma/output.css',
    data: 'a {\n  b: 1 2 3;\n}\n',
  },
  {
    name: 'second/slash/input.scss',
    data: '@use "sass:list";\n$empty-slash-list: list.join((), (), $separator: slash);\na {b: list.join(1 2 3, $empty-slash-list)}\n',
  },
  {
    name: 'second/slash/output.css',
    data: 'a {\n  b: 1 2 3;\n}\n',
  },
  {
    name: 'map/first/undecided/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join(utils.$empty-map, ());\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'map/first/undecided/output.css',
    data: 'a {\n  value: ();\n  separator: space;\n}\n',
  },
  {
    name: 'map/first/space/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(utils.$empty-map, 1 2 3)}\n',
  },
  {
    name: 'map/first/space/output.css',
    data: 'a {\n  b: 1 2 3;\n}\n',
  },
  {
    name: 'map/first/comma/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(utils.$empty-map, (1, 2, 3))}\n',
  },
  {
    name: 'map/first/comma/output.css',
    data: 'a {\n  b: 1, 2, 3;\n}\n',
  },
  {
    name: 'map/first/slash/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(utils.$empty-map, list.slash(1, 2, 3))}\n',
  },
  {
    name: 'map/first/slash/output.css',
    data: 'a {\n  b: 1 / 2 / 3;\n}\n',
  },
  {
    name: 'map/second/space/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(1 2 3, utils.$empty-map)}\n',
  },
  {
    name: 'map/second/space/output.css',
    data: 'a {\n  b: 1 2 3;\n}\n',
  },
  {
    name: 'map/second/comma/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join((1, 2, 3), utils.$empty-map)}\n',
  },
  {
    name: 'map/second/comma/output.css',
    data: 'a {\n  b: 1, 2, 3;\n}\n',
  },
  {
    name: 'map/second/slash/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(list.slash(1, 2, 3), utils.$empty-map)}\n',
  },
  {
    name: 'map/second/slash/output.css',
    data: 'a {\n  b: 1 / 2 / 3;\n}\n',
  },
  {
    name: 'map/second/undecided/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join(utils.$empty-map, ());\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'map/second/undecided/output.css',
    data: 'a {\n  value: ();\n  separator: space;\n}\n',
  },
]
