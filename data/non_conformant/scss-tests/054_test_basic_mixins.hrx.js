export default [
  {
    name: 'input.scss',
    data: '@mixin foo {\n  .foo {a: b}}\n\n@include foo;\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
