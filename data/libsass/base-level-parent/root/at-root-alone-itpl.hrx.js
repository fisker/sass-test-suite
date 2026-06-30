// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/at-root-alone-itpl.hrx

export default [
  {
    name: 'input.scss',
    data: '@at-root {\r\n  #{&} {\r\n    foo {\r\n      bar: baz;\r\n    }\r\n  }\r\n}\r\n',
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,\n2 |   #{&} {\r\n  |        ^\n  '\n  input.scss 2:8  root stylesheet\n",
  },
]
