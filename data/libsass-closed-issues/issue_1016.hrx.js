export default [
  {
    name: 'input.scss',
    data: '.foo {\n  [baz="#{&}"] {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo [baz=".foo"] {\n  foo: bar;\n}\n',
  },
]
