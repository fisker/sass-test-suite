// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1396.hrx

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
