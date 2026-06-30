export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n[foo=#{$zzz}] { a: b; }\n',
  },
  {
    name: 'output.css',
    data: '[foo=zzz] {\n  a: b;\n}\n',
  },
]
