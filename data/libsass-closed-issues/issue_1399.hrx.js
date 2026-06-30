export default [
  {
    name: 'input.scss',
    data: 'foo {\n  foo: 3 - "bar";\n  foo: (3 - "bar");\n  foo: 3 / "bar";\n  foo: (3 / "bar");\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: 3-"bar";\n  foo: 3-"bar";\n  foo: 3/"bar";\n  foo: 3/"bar";\n}\n',
  },
]
