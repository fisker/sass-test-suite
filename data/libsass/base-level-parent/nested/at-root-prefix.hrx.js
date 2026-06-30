// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/nested/at-root-prefix.hrx

export default [
  {
    name: 'input.scss',
    data: 'test{\r\n  @at-root {\r\n    pre& {\r\n      foo {\r\n        bar: baz;\r\n      }\r\n    }\r\n  }\r\n}',
  },
  {
    name: 'error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n3 |     pre& {\r\n  |        ^\n  \'\n  input.scss 3:8  root stylesheet\n',
  },
]
