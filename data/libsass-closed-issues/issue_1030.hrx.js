export default [
  {
    name: 'input.scss',
    data: '@mixin will-change() {\n  @supports (will-change: transform) {\n    will-change: transform;\n  }\n}\ndiv {\n  a {\n    top: 10px;\n    @include will-change();\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'div a {\n  top: 10px;\n}\n@supports (will-change: transform) {\n  div a {\n    will-change: transform;\n  }\n}\n',
  },
]
