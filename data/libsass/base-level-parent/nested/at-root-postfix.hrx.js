// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/nested/at-root-postfix.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  @at-root {\r\n    &post {\r\n      foo {\r\n        bar: baz;\r\n      }\r\n    }\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: 'testpost foo {\n  bar: baz;\n}\n',
  },
]
