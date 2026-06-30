export default [
  {
    name: 'input.scss',
    data: 'div {\n  content: (((92px * 12) / 13px) * 1em) + 22em;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: 106.9230769231em;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(92px * 12, 13px) or calc((92px * 12) / 13px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   content: (((92px * 12) / 13px) * 1em) + 22em;\n  |              ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:14  root stylesheet\n",
  },
]
