export default [
  {
    name: 'input.scss',
    data: ".foo {\n  background: url('background.png') -10px -10px/110% no-repeat\n}\n",
  },
  {
    name: 'output.css',
    data: '.foo {\n  background: url("background.png") -10px -10px/110% no-repeat;\n}\n',
  },
]
