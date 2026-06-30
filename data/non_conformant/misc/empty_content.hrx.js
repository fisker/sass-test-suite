export default [
  {
    name: 'input.scss',
    data: '@mixin foo { @content }\na { b: c; @include foo {} }\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
