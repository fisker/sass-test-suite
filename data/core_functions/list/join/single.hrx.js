// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/join/single.hrx

export default [
  {
    name: 'both/undecided/input.scss',
    data: '@use "sass:list";\na {b: list.join([1], [2])}\n',
  },
  {
    name: 'both/undecided/output.css',
    data: 'a {\n  b: [1 2];\n}\n',
  },
  {
    name: 'both/space/first/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(utils.with-separator(1, space), [2])}\n',
  },
  {
    name: 'both/space/first/output.css',
    data: 'a {\n  b: 1 2;\n}\n',
  },
  {
    name: 'both/space/last/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join([1], utils.with-separator(2, space))}\n',
  },
  {
    name: 'both/space/last/output.css',
    data: 'a {\n  b: [1 2];\n}\n',
  },
  {
    name: 'both/comma/first/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join((1,), [2])}\n',
  },
  {
    name: 'both/comma/first/output.css',
    data: 'a {\n  b: 1, 2;\n}\n',
  },
  {
    name: 'both/comma/last/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\n\na {b: list.join([1], (2,))}\n',
  },
  {
    name: 'both/comma/last/output.css',
    data: 'a {\n  b: [1, 2];\n}\n',
  },
  {
    name: 'both/slash/first/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.join(1, (), $separator: slash), [2])}\n',
  },
  {
    name: 'both/slash/first/output.css',
    data: 'a {\n  b: 1 / 2;\n}\n',
  },
  {
    name: 'both/slash/last/input.scss',
    data: '@use "sass:list";\na {b: list.join([1], list.join(2, (), $separator: slash))}\n',
  },
  {
    name: 'both/slash/last/output.css',
    data: 'a {\n  b: [1 / 2];\n}\n',
  },
  {
    name: 'first/undecided/and_space/input.scss',
    data: '@use "sass:list";\na {b: list.join([1], 2 3 4)}\n',
  },
  {
    name: 'first/undecided/and_space/output.css',
    data: 'a {\n  b: [1 2 3 4];\n}\n',
  },
  {
    name: 'first/undecided/and_comma/input.scss',
    data: '@use "sass:list";\na {b: list.join([1], (2, 3, 4))}\n',
  },
  {
    name: 'first/undecided/and_comma/output.css',
    data: 'a {\n  b: [1, 2, 3, 4];\n}\n',
  },
  {
    name: 'first/undecided/and_slash/input.scss',
    data: '@use "sass:list";\na {b: list.join([1], list.slash(2, 3, 4))}\n',
  },
  {
    name: 'first/undecided/and_slash/output.css',
    data: 'a {\n  b: [1 / 2 / 3 / 4];\n}\n',
  },
  {
    name: 'first/space/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join(utils.with-separator(1, space), (2, 3, 4))}\n',
  },
  {
    name: 'first/space/output.css',
    data: 'a {\n  b: 1 2 3 4;\n}\n',
  },
  {
    name: 'first/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((1,), 2 3 4)}\n',
  },
  {
    name: 'first/comma/output.css',
    data: 'a {\n  b: 1, 2, 3, 4;\n}\n',
  },
  {
    name: 'first/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.join(1, (), $separator: slash), 2 3 4)}\n',
  },
  {
    name: 'first/slash/output.css',
    data: 'a {\n  b: 1 / 2 / 3 / 4;\n}\n',
  },
  {
    name: 'second/undecided/space/input.scss',
    data: '@use "sass:list";\na {b: list.join(1 2 3, [4])}\n',
  },
  {
    name: 'second/undecided/space/output.css',
    data: 'a {\n  b: 1 2 3 4;\n}\n',
  },
  {
    name: 'second/undecided/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((1, 2, 3), [4])}\n',
  },
  {
    name: 'second/undecided/comma/output.css',
    data: 'a {\n  b: 1, 2, 3, 4;\n}\n',
  },
  {
    name: 'second/undecided/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.slash(1, 2, 3), [4])}\n',
  },
  {
    name: 'second/undecided/slash/output.css',
    data: 'a {\n  b: 1 / 2 / 3 / 4;\n}\n',
  },
  {
    name: 'second/space/input.scss',
    data: '@use "sass:list";\n@use "core_functions/list/utils";\na {b: list.join((1, 2, 3), utils.with-separator(4, space))}\n',
  },
  {
    name: 'second/space/output.css',
    data: 'a {\n  b: 1, 2, 3, 4;\n}\n',
  },
  {
    name: 'second/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join(1 2 3, (4,))}\n',
  },
  {
    name: 'second/comma/output.css',
    data: 'a {\n  b: 1 2 3 4;\n}\n',
  },
  {
    name: 'second/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(1 2 3, list.join(4, (), $separator: slash))}\n',
  },
  {
    name: 'second/slash/output.css',
    data: 'a {\n  b: 1 2 3 4;\n}\n',
  },
  {
    name: 'non_list/both/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d)}\n',
  },
  {
    name: 'non_list/both/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'non_list/first/space/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.join(c, d e))}\n',
  },
  {
    name: 'non_list/first/space/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'non_list/first/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, (d, e))}\n',
  },
  {
    name: 'non_list/first/comma/output.css',
    data: 'a {\n  b: c, d, e;\n}\n',
  },
  {
    name: 'non_list/first/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, list.slash(d, e))}\n',
  },
  {
    name: 'non_list/first/slash/output.css',
    data: 'a {\n  b: c / d / e;\n}\n',
  },
  {
    name: 'non_list/first/undecided/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join(c, ());\na {\n  value: meta.inspect($result);\n  type: meta.type-of($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'non_list/first/undecided/output.css',
    data: 'a {\n  value: c;\n  type: list;\n  separator: space;\n}\n',
  },
  {
    name: 'non_list/second/space/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.join(c d, e))}\n',
  },
  {
    name: 'non_list/second/space/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'non_list/second/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((c, d), e)}\n',
  },
  {
    name: 'non_list/second/comma/output.css',
    data: 'a {\n  b: c, d, e;\n}\n',
  },
  {
    name: 'non_list/second/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.slash(c, d), e)}\n',
  },
  {
    name: 'non_list/second/slash/output.css',
    data: 'a {\n  b: c / d / e;\n}\n',
  },
  {
    name: 'non_list/second/undecided/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "core_functions/list/utils";\n\n$result: list.join((), c);\na {\n  value: meta.inspect($result);\n  type: meta.type-of($result);\n  separator: utils.real-separator($result);\n}\n',
  },
  {
    name: 'non_list/second/undecided/output.css',
    data: 'a {\n  value: c;\n  type: list;\n  separator: space;\n}\n',
  },
]
