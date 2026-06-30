export default [
  {
    name: 'input.sass',
    data: '.a\r\n  +\r\n    .c, .b\r\n      margin: 10px',
  },
  {
    name: 'output.css',
    data: '.a + .c, .a + .b {\n  margin: 10px;\n}\n',
  },
]
