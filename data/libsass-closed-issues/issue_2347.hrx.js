export default [
  {
    name: 'input.scss',
    data: '%baz2 {\r\n    display: flex;\r\n}\r\n%baz3 {\r\n    display: flex;\r\n}\r\n\r\ncustom2, [custom2], .custom2 {\r\n    @extend %baz2\r\n}\r\n\r\n[custom3], custom3, .custom3 {\r\n    @extend %baz3\r\n}',
  },
  {
    name: 'output.css',
    data: 'custom2, [custom2], .custom2 {\n  display: flex;\n}\n\n[custom3], custom3, .custom3 {\n  display: flex;\n}\n',
  },
]
