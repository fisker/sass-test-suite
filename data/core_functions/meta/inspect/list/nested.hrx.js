export default [
  {
    name: 'empty/in_space/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([() ()]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'empty/in_space/bracketed/output.css',
    data: 'a {\n  value: [() ()];\n  type: string;\n}\n',
  },
  {
    name: 'empty/in_space/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(() ());\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'empty/in_space/unbracketed/output.css',
    data: 'a {\n  value: () ();\n  type: string;\n}\n',
  },
  {
    name: 'empty/in_comma/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([(), ()]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'empty/in_comma/bracketed/output.css',
    data: 'a {\n  value: [(), ()];\n  type: string;\n}\n',
  },
  {
    name: 'empty/in_comma/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(((), ()));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'empty/in_comma/unbracketed/output.css',
    data: 'a {\n  value: (), ();\n  type: string;\n}\n',
  },
  {
    name: 'empty/in_slash/bracketed/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: meta.inspect(list.join([(), ()], (), $separator: slash));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'empty/in_slash/bracketed/output.css',
    data: 'a {\n  value: [() / ()];\n  type: string;\n}\n',
  },
  {
    name: 'empty/in_slash/unbracketed/input.scss',
    data: '@use "sass:meta";\n@use "sass:list";\n$result: meta.inspect(list.slash((), ()));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'empty/in_slash/unbracketed/output.css',
    data: 'a {\n  value: () / ();\n  type: string;\n}\n',
  },
  {
    name: 'empty_bracketed/bracketed/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect([[] []])}\n',
  },
  {
    name: 'empty_bracketed/bracketed/output.css',
    data: 'a {\n  b: [[] []];\n}\n',
  },
  {
    name: 'empty_bracketed/unbracketed/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(([] []))}\n',
  },
  {
    name: 'empty_bracketed/unbracketed/output.css',
    data: 'a {\n  b: [] [];\n}\n',
  },
  {
    name: 'space/in_space/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([(1 2) (3 4)]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'space/in_space/bracketed/output.css',
    data: 'a {\n  value: [(1 2) (3 4)];\n  type: string;\n}\n',
  },
  {
    name: 'space/in_space/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1 2) (3 4));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'space/in_space/unbracketed/output.css',
    data: 'a {\n  value: (1 2) (3 4);\n  type: string;\n}\n',
  },
  {
    name: 'space/in_comma/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([1 2, 3 4]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'space/in_comma/bracketed/output.css',
    data: 'a {\n  value: [1 2, 3 4];\n  type: string;\n}\n',
  },
  {
    name: 'space/in_comma/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1 2, 3 4));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'space/in_comma/unbracketed/output.css',
    data: 'a {\n  value: 1 2, 3 4;\n  type: string;\n}\n',
  },
  {
    name: 'space/in_slash/bracketed/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: meta.inspect(list.join([1 2, 3 4], (), $separator: slash));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'space/in_slash/bracketed/output.css',
    data: 'a {\n  value: [1 2 / 3 4];\n  type: string;\n}\n',
  },
  {
    name: 'space/in_slash/unbracketed/input.scss',
    data: '@use "sass:meta";\n@use "sass:list";\n$result: meta.inspect(list.slash(1 2, 3 4));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'space/in_slash/unbracketed/output.css',
    data: 'a {\n  value: 1 2 / 3 4;\n  type: string;\n}\n',
  },
  {
    name: 'comma/in_space/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([(1, 2) (3, 4)]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'comma/in_space/bracketed/output.css',
    data: 'a {\n  value: [(1, 2) (3, 4)];\n  type: string;\n}\n',
  },
  {
    name: 'comma/in_space/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1, 2) (3, 4));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'comma/in_space/unbracketed/output.css',
    data: 'a {\n  value: (1, 2) (3, 4);\n  type: string;\n}\n',
  },
  {
    name: 'comma/in_comma/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([(1, 2), (3, 4)]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'comma/in_comma/bracketed/output.css',
    data: 'a {\n  value: [(1, 2), (3, 4)];\n  type: string;\n}\n',
  },
  {
    name: 'comma/in_comma/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(((1, 2), (3, 4)));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'comma/in_comma/unbracketed/output.css',
    data: 'a {\n  value: (1, 2), (3, 4);\n  type: string;\n}\n',
  },
  {
    name: 'comma/in_slash/bracketed/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: meta.inspect(list.join([(1, 2), (3, 4)], (), $separator: slash));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'comma/in_slash/bracketed/output.css',
    data: 'a {\n  value: [(1, 2) / (3, 4)];\n  type: string;\n}\n',
  },
  {
    name: 'comma/in_slash/unbracketed/input.scss',
    data: '@use "sass:meta";\n@use "sass:list";\n$result: meta.inspect(list.slash((1, 2), (3, 4)));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'comma/in_slash/unbracketed/output.css',
    data: 'a {\n  value: (1, 2) / (3, 4);\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/in_space/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([[1, 2] [3, 4]]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/in_space/bracketed/output.css',
    data: 'a {\n  value: [[1, 2] [3, 4]];\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/in_space/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([1, 2] [3, 4]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/in_space/unbracketed/output.css',
    data: 'a {\n  value: [1, 2] [3, 4];\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/in_comma/bracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([[1, 2], [3, 4]]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/in_comma/bracketed/output.css',
    data: 'a {\n  value: [[1, 2], [3, 4]];\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/in_comma/unbracketed/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(((1, 2), (3, 4)));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/in_comma/unbracketed/output.css',
    data: 'a {\n  value: (1, 2), (3, 4);\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/in_slash/bracketed/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: meta.inspect(list.join([[1, 2], [3, 4]], (), $separator: slash));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/in_slash/bracketed/output.css',
    data: 'a {\n  value: [[1, 2] / [3, 4]];\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/in_slash/unbracketed/input.scss',
    data: '@use "sass:meta";\n@use "sass:list";\n$result: meta.inspect(list.slash([1, 2], [3, 4]));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/in_slash/unbracketed/output.css',
    data: 'a {\n  value: [1, 2] / [3, 4];\n  type: string;\n}\n',
  },
]
