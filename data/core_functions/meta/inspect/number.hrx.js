export default [
  {
    name: 'unitless/input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(123.456);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'unitless/output.css',
    data: 'a {\n  value: 123.456;\n  type: string;\n}\n',
  },
  {
    name: 'unit/input.scss',
    data: "@use \"sass:meta\";\n// We explicitly don't test the inspect format for complex units. Their format\n// isn't guaranteed by the spec, since they can't be written literally in Sass.\n$result: meta.inspect(50px);\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n",
  },
  {
    name: 'unit/output.css',
    data: 'a {\n  value: 50px;\n  type: string;\n}\n',
  },
]
