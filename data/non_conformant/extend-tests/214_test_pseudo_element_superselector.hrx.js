export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:after {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar:after {\n  a: b;\n}\n',
  },
]
