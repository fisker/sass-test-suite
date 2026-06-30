export default [
  {
    name: 'input.scss',
    data: '.a > .b + x {a: b}\n.c > y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a > .b + x, .a.c > .b + y {\n  a: b;\n}\n',
  },
]
