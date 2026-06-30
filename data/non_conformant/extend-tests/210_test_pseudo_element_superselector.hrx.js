export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:fblthp {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar {\n  a: b;\n}\n',
  },
]
