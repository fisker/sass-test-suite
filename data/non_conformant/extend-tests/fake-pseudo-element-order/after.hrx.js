export default [
  {
    name: 'input.scss',
    data: '%a:after {x: y}\nb:c {@extend %a}\n',
  },
  {
    name: 'output.css',
    data: 'b:c:after {\n  x: y;\n}\n',
  },
]
