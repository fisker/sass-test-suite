export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n[#{$zzz}=foo] { a: b; }\n',
  },
  {
    name: 'output.css',
    data: '[zzz=foo] {\n  a: b;\n}\n',
  },
]
