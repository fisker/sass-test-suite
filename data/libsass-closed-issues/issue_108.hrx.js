export default [
  {
    name: 'input.scss',
    data: '$a: red;\r\n\r\n@mixin f($a: $a) {\r\n  color: $a;\r\n}\r\n\r\nh1 {\r\n  @include f;\r\n}\r\n\r\nh2 {\r\n  @include f(blue);\r\n}',
  },
  {
    name: 'output.css',
    data: 'h1 {\n  color: red;\n}\n\nh2 {\n  color: blue;\n}\n',
  },
]
