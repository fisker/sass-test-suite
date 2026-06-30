export default [
  {
    name: 'input.scss',
    data: 'div {\n\n  &_foo {\n    blah: blah;\n  }\n  &--modifier {\n    blach: blah;\n  }\n  &hux {\n    blah: blah;\n  }\n  &div.foo#bar[hux] {\n    blah: blah;\n  }\n\n}',
  },
  {
    name: 'output.css',
    data: 'div_foo {\n  blah: blah;\n}\ndiv--modifier {\n  blach: blah;\n}\ndivhux {\n  blah: blah;\n}\ndivdiv.foo#bar[hux] {\n  blah: blah;\n}\n',
  },
]
