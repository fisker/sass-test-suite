export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n.#{$zzz} { a: b; }\n',
  },
  {
    name: 'output.css',
    data: '.zzz {\n  a: b;\n}\n',
  },
]
