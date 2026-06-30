export default [
  {
    name: 'sass/input.sass',
    data: '$a: b;\nc\n  d: $a\n',
  },
  {
    name: 'sass/output.css',
    data: 'c {\n  d: b;\n}\n',
  },
]
