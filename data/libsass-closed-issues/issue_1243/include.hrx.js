export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {\n  a { b: c; }\n}\n@include foo\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
