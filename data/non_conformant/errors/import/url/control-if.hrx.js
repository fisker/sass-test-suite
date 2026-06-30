// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/url/control-if.hrx

export default [
  {
    name: 'input.scss',
    data: '@if (true) {\r\n  @import url("http://www.libsass.org");\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '@import url("http://www.libsass.org");\n',
  },
]
