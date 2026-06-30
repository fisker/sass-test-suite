export default [
  {
    name: 'input.scss',
    data: "foo {\n  -quotes: 'this-string' == 'this-string';\n  -quotes: this-string == 'this-string';\n  -quotes: 'this-string' == \"this-string\";\n  -quotes: 'this-string' == '\"this-string\"';\n  -quotes: '\"this-string\"' == \"'this-string'\";\n  foo: this-string;\n  foo: 'this-string';\n  foo: \"this-string\";\n  foo: '\"this-string\"';\n  foo: \"'this-string'\";\n}\n",
  },
  {
    name: 'output.css',
    data: 'foo {\n  -quotes: true;\n  -quotes: true;\n  -quotes: true;\n  -quotes: false;\n  -quotes: false;\n  foo: this-string;\n  foo: "this-string";\n  foo: "this-string";\n  foo: \'"this-string"\';\n  foo: "\'this-string\'";\n}\n',
  },
]
