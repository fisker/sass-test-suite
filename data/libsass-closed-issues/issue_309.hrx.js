// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_309.hrx

export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\r\na[data-foo="#{$zzz}"] { a: b; }',
  },
  {
    name: 'output.css',
    data: 'a[data-foo=zzz] {\n  a: b;\n}\n',
  },
]
