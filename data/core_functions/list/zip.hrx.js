// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/zip.hrx

export default [
  {
    name: 'README.md',
    data: "`zip()` is unique among built-in functions in that there's no possible\ninvocation that produces an error, since it can take any number of arguments and\nany argument can be interpreted as a list. Since we don't normally test for\npassing invalid named parameters, it has no error tests.\n",
  },
  {
    name: 'no_lists/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.zip();\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'no_lists/output.css',
    data: 'a {\n  value: ();\n  separator: comma;\n}\n',
  },
  {
    name: 'one_list/empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.zip(());\na {\n  value: meta.inspect($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'one_list/empty/output.css',
    data: 'a {\n  value: ();\n  separator: comma;\n}\n',
  },
  {
    name: 'one_list/space/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.zip(1 2 3);\n$element: list.nth($result, 2);\n\na {\n  value: $result;\n  element: $element {\n    type: meta.type-of($element);\n    separator: utils.real-separator($element);\n  }\n}\n',
  },
  {
    name: 'one_list/space/output.css',
    data: 'a {\n  value: 1, 2, 3;\n  element: 2;\n  element-type: list;\n  element-separator: space;\n}\n',
  },
  {
    name: 'one_list/comma/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.zip((1, 2, 3));\n$element: list.nth($result, 2);\n\na {\n  value: $result;\n  element: $element {\n    type: meta.type-of($element);\n    separator: utils.real-separator($element);\n  }\n}\n',
  },
  {
    name: 'one_list/comma/output.css',
    data: 'a {\n  value: 1, 2, 3;\n  element: 2;\n  element-type: list;\n  element-separator: space;\n}\n',
  },
  {
    name: 'one_list/bracketed/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.zip([1 2 3]);\n$element: list.nth($result, 2);\n\na {\n  value: $result;\n  element: $element {\n    type: meta.type-of($element);\n    separator: utils.real-separator($element);\n  }\n}\n',
  },
  {
    name: 'one_list/bracketed/output.css',
    data: 'a {\n  value: 1, 2, 3;\n  element: 2;\n  element-type: list;\n  element-separator: space;\n}\n',
  },
  {
    name: 'two_lists/first_empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.zip((), 1 2 3))}\n',
  },
  {
    name: 'two_lists/first_empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'two_lists/second_empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.zip(1 2 3, ()))}\n',
  },
  {
    name: 'two_lists/second_empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'two_lists/first_longer/input.scss',
    data: '@use "sass:list";\na {b: list.zip(1 2 3 4, c d)}\n',
  },
  {
    name: 'two_lists/first_longer/output.css',
    data: 'a {\n  b: 1 c, 2 d;\n}\n',
  },
  {
    name: 'two_lists/second_longer/input.scss',
    data: '@use "sass:list";\na {b: list.zip(1 2, c d e f)}\n',
  },
  {
    name: 'two_lists/second_longer/output.css',
    data: 'a {\n  b: 1 c, 2 d;\n}\n',
  },
  {
    name: 'two_lists/same_length/input.scss',
    data: '@use "sass:list";\na {b: list.zip(1 2 3, c d e)}\n',
  },
  {
    name: 'two_lists/same_length/output.css',
    data: 'a {\n  b: 1 c, 2 d, 3 e;\n}\n',
  },
  {
    name: 'three_lists/input.scss',
    data: '@use "sass:list";\na {b: list.zip(1 2 3, c d e, red green blue)}\n',
  },
  {
    name: 'three_lists/output.css',
    data: 'a {\n  b: 1 c red, 2 d green, 3 e blue;\n}\n',
  },
  {
    name: 'map/empty/input.scss',
    data: '@use "sass:list";\n@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(list.zip(map.remove((c: d), c)))}\n',
  },
  {
    name: 'map/empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'map/non_empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.zip((c: d, e: f, g: h), 1 2 3))}\n',
  },
  {
    name: 'map/non_empty/output.css',
    data: 'a {\n  b: (c d) 1, (e f) 2, (g h) 3;\n}\n',
  },
  {
    name: 'non_list/input.scss',
    data: '@use "sass:list";\na {b: list.zip(c, d, e)}\n',
  },
  {
    name: 'non_list/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
]
