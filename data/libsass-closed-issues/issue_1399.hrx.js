// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1399.hrx

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
