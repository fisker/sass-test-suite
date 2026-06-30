export default [
  {
    name: 'true/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(true);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'true/output.css',
    data: 'a {\n  value: true;\n  type: string;\n}\n',
  },
  {
    name: 'false/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(false);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'false/output.css',
    data: 'a {\n  value: false;\n  type: string;\n}\n',
  },
]
