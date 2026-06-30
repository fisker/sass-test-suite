// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/nested/basic-postfix-itpl.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  #{&}post {\r\n    foo {\r\n      bar: baz;\r\n    }\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'test testpost foo {\n  bar: baz;\n}\n',
  },
]
