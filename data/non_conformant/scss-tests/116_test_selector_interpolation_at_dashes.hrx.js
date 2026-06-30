export default [
  {
    name: 'input.scss',
    data: '$a : a;\n$b : b;\ndiv { -foo-#{$a}-#{$b}-foo: foo }\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  -foo-a-b-foo: foo;\n}\n',
  },
]
