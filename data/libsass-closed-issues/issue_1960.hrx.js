// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1960.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo:not(.missing) {\n  a: b;\n\n  &:hover { c: d; }\n}\n\nbar {\n  @extend .missing;\n}',
  },
  {
    name: 'output.css',
    data: 'foo:not(.missing):not(bar) {\n  a: b;\n}\nfoo:not(.missing):not(bar):hover {\n  c: d;\n}\n',
  },
]
