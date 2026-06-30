// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1792.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\n  test1: (3px*4in) / 1in;\n  test2: ((1px*2in) + (3px*4in)) / 1in;\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  test1: 0.125in;\n  test2: 0.1458333333in;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3px * 4in, 1in) or calc((3px * 4in) / 1in)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   test1: (3px*4in) / 1in;\n  |          ^^^^^^^^^^^^^^^\n  '\n    input.scss 2:10  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div((1px * 2in) + (3px * 4in), 1in) or calc(((1px * 2in) + (3px * 4in)) / 1in)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 |   test2: ((1px*2in) + (3px*4in)) / 1in;\n  |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 3:10  root stylesheet\n",
  },
]
