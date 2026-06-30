// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_442.hrx

export default [
  {
    name: 'input.scss',
    data: '$lhs: (100/10)#{rem};\n$rhs: 10rem;\n\nfoo {\n  a: $lhs;\n  a: $rhs;\n  a: $lhs == $rhs;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 10 rem;\n  a: 10rem;\n  a: false;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(100, 10) or calc(100 / 10)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | $lhs: (100/10)#{rem};\n  |        ^^^^^^\n  '\n    input.scss 1:8  root stylesheet\n",
  },
]
