// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1441/child.hrx

export default [
  {
    name: 'input.scss',
    data: '.child {\n    & > & {\n        foo: bar;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '.child > .child {\n  foo: bar;\n}\n',
  },
]
