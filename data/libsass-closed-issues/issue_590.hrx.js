// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_590.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  foo: 1/2;\n  foo: 0.5;\n  foo: (1/2);\n  foo: 1/2 == 0.5;\n  foo: (1/2) == 0.5;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: 1/2;\n  foo: 0.5;\n  foo: 0.5;\n  foo: true;\n  foo: true;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n4 |   foo: (1/2);\n  |         ^^^\n  '\n    input.scss 4:9  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n5 |   foo: 1/2 == 0.5;\n  |        ^^^\n  '\n    input.scss 5:8  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n6 |   foo: (1/2) == 0.5;\n  |         ^^^\n  '\n    input.scss 6:9  root stylesheet\n",
  },
]
