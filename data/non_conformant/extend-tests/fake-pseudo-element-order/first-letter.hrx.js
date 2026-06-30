export default [
  {
    name: 'input.scss',
    data: '%a:first-letter {x: y}\nb:c {@extend %a}\n',
  },
  {
    name: 'output.css',
    data: 'b:c:first-letter {\n  x: y;\n}\n',
  },
]
