export default [
  {
    name: 'input.scss',
    data: '@mixin wrapper() {\n  .wrapped {\n    @content;\n  }\n}\n\n%ext {\n  background: #000;\n}\n\n@include wrapper() {\n  @extend %ext;\n}',
  },
  {
    name: 'output.css',
    data: '.wrapped {\n  background: #000;\n}\n',
  },
]
