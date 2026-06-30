export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(());\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  value: ();\n  type: string;\n}\n',
  },
]
