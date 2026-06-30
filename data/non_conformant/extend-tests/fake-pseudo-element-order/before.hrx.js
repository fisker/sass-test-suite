export default [
  {
    name: 'input.scss',
    data: '%a:before {x: y}\nb:c {@extend %a}\n',
  },
  {
    name: 'output.css',
    data: 'b:c:before {\n  x: y;\n}\n',
  },
]
