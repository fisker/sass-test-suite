export default [
  {
    name: 'input.scss',
    data: '@for $i from 1 through 2 {\r\n  @import url("http://www.libsass.org");\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '@import url("http://www.libsass.org");\n@import url("http://www.libsass.org");\n',
  },
]
