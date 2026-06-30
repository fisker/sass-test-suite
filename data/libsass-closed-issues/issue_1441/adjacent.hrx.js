// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1441/adjacent.hrx

export default [
  {
    name: 'input.scss',
    data: '.adjacent {\n    & + & {\n        foo: bar;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '.adjacent + .adjacent {\n  foo: bar;\n}\n',
  },
]
