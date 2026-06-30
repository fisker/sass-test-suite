export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n:#{$zzz}::#{$zzz} { a: b; }\n',
  },
  {
    name: 'output.css',
    data: ':zzz::zzz {\n  a: b;\n}\n',
  },
]
