export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:first-line {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar:first-line {\n  a: b;\n}\n',
  },
]
