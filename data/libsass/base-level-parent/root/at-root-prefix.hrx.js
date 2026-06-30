// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/at-root-prefix.hrx

export default [
  {
    name: 'input.scss',
    data: '@at-root {\r\n  pre& {\r\n    foo {\r\n      bar: baz;\r\n    }\r\n  }\r\n}',
  },
  {
    name: 'error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n2 |   pre& {\r\n  |      ^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
]
