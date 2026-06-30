export default [
  {
    name: 'input.scss',
    data: '@mixin foo($args...) {\n  @each $arg in $args {\n    @if $arg {\n      thing: $arg;\n    }\n  }\n}\n\ndiv {\n  @include foo(a, b, false);\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  thing: a;\n  thing: b;\n}\n',
  },
]
