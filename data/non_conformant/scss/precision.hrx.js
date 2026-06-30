// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/precision.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  a: (20/3);\n  b: (5/2);\n  c: (9/3);\n  d: (20/-3);\n  e: (-5/2);\n  f: -(9/3);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  a: 6.6666666667;\n  b: 2.5;\n  c: 3;\n  d: -6.6666666667;\n  e: -2.5;\n  f: -3;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(20, 3) or calc(20 / 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   a: (20/3);\n  |       ^^^^\n  '\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(5, 2) or calc(5 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 |   b: (5/2);\n  |       ^^^\n  '\n    input.scss 3:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(9, 3) or calc(9 / 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n4 |   c: (9/3);\n  |       ^^^\n  '\n    input.scss 4:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(20, -3) or calc(20 / -3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n5 |   d: (20/-3);\n  |       ^^^^^\n  '\n    input.scss 5:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(-5, 2) or calc(-5 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n6 |   e: (-5/2);\n  |       ^^^^\n  '\n    input.scss 6:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(9, 3) or calc(9 / 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n7 |   f: -(9/3);\n  |        ^^^\n  '\n    input.scss 7:8  root stylesheet\n",
  },
]
