export default [
  {
    name: 'number/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1: 2, 3: 4));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'number/output.css',
    data: 'a {\n  value: (1: 2, 3: 4);\n  type: string;\n}\n',
  },
  {
    name: 'list/key/space/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1 2: 3, 4 5: 6));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'list/key/space/output.css',
    data: 'a {\n  value: (1 2: 3, 4 5: 6);\n  type: string;\n}\n',
  },
  {
    name: 'list/key/comma/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(((1, 2): 3, (4, 5): 6));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'list/key/comma/output.css',
    data: 'a {\n  value: ((1, 2): 3, (4, 5): 6);\n  type: string;\n}\n',
  },
  {
    name: 'list/value/space/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1: 2 3, 4: 5 6));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'list/value/space/output.css',
    data: 'a {\n  value: (1: 2 3, 4: 5 6);\n  type: string;\n}\n',
  },
  {
    name: 'list/value/comma/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1: (2, 3), 4: (5, 6)));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'list/value/comma/output.css',
    data: 'a {\n  value: (1: (2, 3), 4: (5, 6));\n  type: string;\n}\n',
  },
]
