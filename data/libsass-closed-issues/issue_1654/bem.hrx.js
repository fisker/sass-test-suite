export default [
  {
    name: 'input.scss',
    data: '%foo,\n.foo {\n display:block;\n\n  &--up {\n   border: none;\n }\n}\n\n.zoo {\n  @extend %foo;\n\n  &--up {\n    @extend %foo--up;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '.zoo,\n.foo {\n  display: block;\n}\n.zoo--up,\n.foo--up {\n  border: none;\n}\n',
  },
]
