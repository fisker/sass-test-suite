// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2582.hrx

export default [
  {
    name: 'input.scss',
    data: '.test {\r\n  font-size: (16px / 16px) + 0em;\r\n  font-size: (16px / 16px  + 0em);\r\n  font-size: 16px / 16px  + 0em;\r\n}',
  },
  {
    name: 'output.css',
    data: '.test {\n  font-size: 1em;\n  font-size: 1em;\n  font-size: 1em;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(16px, 16px) or calc(16px / 16px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   font-size: (16px / 16px) + 0em;\r\n  |               ^^^^^^^^^^^\n  '\n    input.scss 2:15  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(16px, 16px) or calc(16px / 16px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 |   font-size: (16px / 16px  + 0em);\r\n  |               ^^^^^^^^^^^\n  '\n    input.scss 3:15  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(16px, 16px) or calc(16px / 16px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n4 |   font-size: 16px / 16px  + 0em;\r\n  |              ^^^^^^^^^^^\n  '\n    input.scss 4:14  root stylesheet\n",
  },
]
