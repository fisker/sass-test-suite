export default [
  {
    name: 'input.scss',
    data: 'foo {\n  foo: foo"bar"#{baz};\n  foo: foo"bar"baz;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: foo "bar" baz;\n  foo: foo "bar" baz;\n}\n',
  },
]
