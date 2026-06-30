// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/inspect/list/single.hrx

export default [
  {
    name: 'space/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: meta.inspect(list.append((), 1, space));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'space/output.css',
    data: 'a {\n  value: 1;\n  type: string;\n}\n',
  },
  {
    name: 'comma/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect((1,));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'comma/output.css',
    data: 'a {\n  value: (1,);\n  type: string;\n}\n',
  },
  {
    name: 'slash/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$result: meta.inspect(list.append((), 1, slash));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'slash/output.css',
    data: 'a {\n  value: (1/);\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/undecided/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([1]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/undecided/output.css',
    data: 'a {\n  value: [1];\n  type: string;\n}\n',
  },
  {
    name: 'bracketed/comma/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect([1,]);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'bracketed/comma/output.css',
    data: 'a {\n  value: [1,];\n  type: string;\n}\n',
  },
]
