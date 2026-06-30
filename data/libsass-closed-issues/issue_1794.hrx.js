// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1794.hrx

export default [
  {
    name: 'input.scss',
    data: '@media (max-width /*comment*/ : 500px) {\n  foo { bar: baz; }\n}',
  },
  {
    name: 'output.css',
    data: '@media (max-width: 500px) {\n  foo {\n    bar: baz;\n  }\n}\n',
  },
]
