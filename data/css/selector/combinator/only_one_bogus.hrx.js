// https://github.com/sass/sass-spec/blob/HEAD/spec/css/selector/combinator/only_one_bogus.hrx

export default [
  {
    name: 'input.scss',
    data: 'a, + b {c: d}\n',
  },
  {
    name: 'output.css',
    data: 'a, + b {\n  c: d;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "+ b" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | a, + b {c: d}\n  |    ^^^\n  \'\n    input.scss 1:4  root stylesheet\n',
  },
]
