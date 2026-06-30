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
