// https://github.com/sass/sass-spec/blob/HEAD/spec/css/escape.hrx

export default [
  {
    name: 'zero/input.scss',
    data: '// Although zero is not a valid code point per spec, we pass it through because\n// it can be used for browser hacks.\na {b: \\0}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: \\0 ;\n}\n',
  },
  {
    name: 'error/syntax/too_high/input.scss',
    data: '// Regression test for sass/dart-sass#1030.\na {b: \\110000}\n',
  },
  {
    name: 'error/syntax/too_high/error',
    data: "Error: Invalid Unicode code point.\n  ,\n2 | a {b: \\110000}\n  |       ^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
