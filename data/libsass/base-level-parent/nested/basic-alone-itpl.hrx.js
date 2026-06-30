// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/nested/basic-alone-itpl.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  #{&} {\r\n    foo {\r\n      bar: baz;\r\n    }\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'test test foo {\n  bar: baz;\n}\n',
  },
]
