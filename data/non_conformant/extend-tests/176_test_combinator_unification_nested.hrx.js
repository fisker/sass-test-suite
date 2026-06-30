export default [
  {
    name: 'input.scss',
    data: '.a > .b + x {a: b}\n.c > .d + y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a > .b + x, .a.c > .b.d + y {\n  a: b;\n}\n',
  },
]
