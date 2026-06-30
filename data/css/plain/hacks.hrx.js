export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: '.hacks {\n  *x: y;\n  :x: y;\n  #x: y;\n  .x: y;\n}\n',
  },
  {
    name: 'output.css',
    data: '.hacks {\n  *x: y;\n  :x: y;\n  #x: y;\n  .x: y;\n}\n',
  },
]
