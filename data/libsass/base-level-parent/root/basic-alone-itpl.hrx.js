// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/basic-alone-itpl.hrx

export default [
  {
    name: 'input.scss',
    data: '#{&} {\r\n  foo {\r\n    bar: baz;\r\n  }\r\n}\r\n',
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,\n1 | #{&} {\r\n  |      ^\n  '\n  input.scss 1:6  root stylesheet\n",
  },
]
