// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1441/sibling.hrx

export default [
  {
    name: 'input.scss',
    data: '.sibling {\n    & ~ & {\n        foo: bar;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '.sibling ~ .sibling {\n  foo: bar;\n}\n',
  },
]
