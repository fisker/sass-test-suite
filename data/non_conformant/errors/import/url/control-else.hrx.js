export default [
  {
    name: 'input.scss',
    data: '@if (false) {\r\n} @else {\r\n  @import url("http://www.libsass.org");\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '@import url("http://www.libsass.org");\n',
  },
]
