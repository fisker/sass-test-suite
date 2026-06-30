// https://github.com/sass/sass-spec/blob/HEAD/spec/css/functions/special/error.hrx

export default [
  {
    name: 'whitespace/sass/before_paren/middle/input.sass',
    data: 'a\n  b: url\n    (c)\n',
  },
  {
    name: 'whitespace/sass/before_paren/middle/error',
    data: "Error: Expected identifier.\n  ,\n2 |   b: url\n  |         ^\n  '\n  input.sass 2:9  root stylesheet\n",
  },
]
