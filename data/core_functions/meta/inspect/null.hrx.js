// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/inspect/null.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(null);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  value: null;\n  type: string;\n}\n',
  },
]
