export default [
  {
    name: 'input.scss',
    data: '@mixin do_import() {\r\n  @import url("http://www.libsass.org");\r\n}\r\n\r\n@if (true) {\r\n  @include do_import();\r\n}',
  },
  {
    name: 'output.css',
    data: '@import url("http://www.libsass.org");\n',
  },
]
