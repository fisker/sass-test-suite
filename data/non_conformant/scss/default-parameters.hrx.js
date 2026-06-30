export default [
  {
    name: 'input.scss',
    data: '$a: red;\n\n@mixin f($a: $a) {\n  color: $a;\n}\n\nh1 {\n  @include f;\n}\n\nh2 {\n  @include f(blue);\n}',
  },
  {
    name: 'output.css',
    data: 'h1 {\n  color: red;\n}\n\nh2 {\n  color: blue;\n}\n',
  },
]
