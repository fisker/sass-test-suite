export default [
  {
    name: 'input.scss',
    data: '%a:first-line {x: y}\nb:c {@extend %a}\n',
  },
  {
    name: 'output.css',
    data: 'b:c:first-line {\n  x: y;\n}\n',
  },
]
