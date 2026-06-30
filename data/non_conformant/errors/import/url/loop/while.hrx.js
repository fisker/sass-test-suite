// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/url/loop/while.hrx

export default [
  {
    name: 'input.scss',
    data: '$count: 0;\r\n@while ($count < 1) {\r\n  @import url("http://www.libsass.org");\r\n  $count: $count + 1;\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '@import url("http://www.libsass.org");\n',
  },
]
