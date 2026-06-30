// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1996.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: "bar";\n\n%class //#{$foo}\n{\n  &_baz {\n    color: red;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '',
  },
]
