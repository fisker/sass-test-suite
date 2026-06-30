export default [
  {
    name: 'input.scss',
    data: '%x .c %y {a: b}\n.a, .b {@extend %x}\n.a .d {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: '.a .c .d, .b .c .a .d {\n  a: b;\n}\n',
  },
]
