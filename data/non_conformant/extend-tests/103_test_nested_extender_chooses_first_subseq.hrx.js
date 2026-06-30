export default [
  {
    name: 'input.scss',
    data: '.a .b .c .d .foo {a: b}\n.c .d .a .b .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.a .b .c .d .foo, .a .b .c .d .a .b .bar {\n  a: b;\n}\n',
  },
]
