// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/inspect/list/space.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(1 2 3);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  value: 1 2 3;\n  type: string;\n}\n',
  },
]
