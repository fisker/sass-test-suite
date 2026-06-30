// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1901.hrx

export default [
  {
    name: 'input.scss',
    data: 'a, b {\n    &:not(c) {\n        d: e;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a:not(c), b:not(c) {\n  d: e;\n}\n',
  },
]
