export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:before {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar:before {\n  a: b;\n}\n',
  },
]
