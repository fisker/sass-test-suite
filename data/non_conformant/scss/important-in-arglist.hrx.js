export default [
  {
    name: 'input.scss',
    data: '@mixin foo($x) {\n  style: $x;\n}\n\ndiv {\n  @include foo(0px 0px 0px 0px #ef8086 inset !important);\n  fludge: foo bar ! important hux;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  style: 0px 0px 0px 0px #ef8086 inset !important;\n  fludge: foo bar !important hux;\n}\n',
  },
]
