// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_817.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  foo: url(\'foo/bar.baz\');\n  foo: url("foo/bar.baz");\n  foo: url(foo/bar.baz);\n  foo: foo(\'foo/bar.baz\', "bar", 55);\n  foo: foo("foo/bar.baz", \'bar\', 55);\n  foo: foo("foo/bar.baz", bar, 55); }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: url("foo/bar.baz");\n  foo: url("foo/bar.baz");\n  foo: url(foo/bar.baz);\n  foo: foo("foo/bar.baz", "bar", 55);\n  foo: foo("foo/bar.baz", "bar", 55);\n  foo: foo("foo/bar.baz", bar, 55);\n}\n',
  },
]
