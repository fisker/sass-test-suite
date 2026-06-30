// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1304.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n    a:&;\n    > bar {\n        b:&;\n        > baz {\n            c:&;\n        }\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: foo;\n}\nfoo > bar {\n  b: foo > bar;\n}\nfoo > bar > baz {\n  c: foo > bar > baz;\n}\n',
  },
]
