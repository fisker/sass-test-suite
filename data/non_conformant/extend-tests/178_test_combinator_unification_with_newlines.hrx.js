export default [
  {
    name: 'input.scss',
    data: '.a >\n.b\n+ x {a: b}\n.c\n> .d +\ny {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a > .b + x, .a.c > .b.d + y {\n  a: b;\n}\n',
  },
]
