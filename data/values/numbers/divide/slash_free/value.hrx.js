// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/divide/slash_free/value.hrx

export default [
  {
    name: 'parentheses/all/input.scss',
    data: 'a {b: (1/2)}\n',
  },
  {
    name: 'parentheses/all/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'parentheses/all/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: (1/2)}\n  |        ^^^\n  '\n    input.scss 1:8  root stylesheet\n",
  },
  {
    name: 'parentheses/left/input.scss',
    data: 'a {b: (1)/2}\n',
  },
  {
    name: 'parentheses/left/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'parentheses/left/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc((1) / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: (1)/2}\n  |       ^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'parentheses/right/input.scss',
    data: 'a {b: 1/(2)}\n',
  },
  {
    name: 'parentheses/right/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'parentheses/right/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / (2))\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: 1/(2)}\n  |       ^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'outer_math/left/input.scss',
    data: 'a {b: 1+1/2}\n',
  },
  {
    name: 'outer_math/left/output.css',
    data: 'a {\n  b: 1.5;\n}\n',
  },
  {
    name: 'outer_math/left/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: 1+1/2}\n  |         ^^^\n  '\n    input.scss 1:9  root stylesheet\n",
  },
  {
    name: 'outer_math/right/input.scss',
    data: 'a {b: 1/2+1}\n',
  },
  {
    name: 'outer_math/right/output.css',
    data: 'a {\n  b: 1.5;\n}\n',
  },
  {
    name: 'outer_math/right/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: 1/2+1}\n  |       ^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'inner_math/input.scss',
    data: 'a {b: 1*1/2}\n',
  },
  {
    name: 'inner_math/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'inner_math/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1 * 1, 2) or calc(1 * 1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: 1*1/2}\n  |       ^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'parentheses_in_list/input.scss',
    data: 'a {b: 3 (1/2) 4}\n',
  },
  {
    name: 'parentheses_in_list/output.css',
    data: 'a {\n  b: 3 0.5 4;\n}\n',
  },
  {
    name: 'parentheses_in_list/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: 3 (1/2) 4}\n  |          ^^^\n  '\n    input.scss 1:10  root stylesheet\n",
  },
]
