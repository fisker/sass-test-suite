export default [
  {
    name: 'input.scss',
    data: 'foo {\r\n  bar: baz;\r\n}\r\n\r\n@mixin link() {\r\n  a:not(.btn) {\r\n    color: red;\r\n  }\r\n}\r\n\r\nfoo {\r\n  @include link;\r\n  @extend .btn;\r\n  @include link;\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n}\n\nfoo a:not(.btn):not(foo) {\n  color: red;\n}\nfoo a:not(.btn):not(foo) {\n  color: red;\n}\n',
  },
]
