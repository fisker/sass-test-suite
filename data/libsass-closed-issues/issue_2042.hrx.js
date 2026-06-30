// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2042.hrx

export default [
  {
    name: 'input.scss',
    data: '.wizard-editor {\r\n    transform: scale(50/1);\r\n    transform: scale((50/1));\r\n    transform: scale( (50/1) );\r\n}',
  },
  {
    name: 'output.css',
    data: '.wizard-editor {\n  transform: scale(50/1);\n  transform: scale(50);\n  transform: scale(50);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(50, 1) or calc(50 / 1)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 |     transform: scale((50/1));\r\n  |                       ^^^^\n  '\n    input.scss 3:23  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(50, 1) or calc(50 / 1)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n4 |     transform: scale( (50/1) );\r\n  |                        ^^^^\n  '\n    input.scss 4:24  root stylesheet\n",
  },
]
