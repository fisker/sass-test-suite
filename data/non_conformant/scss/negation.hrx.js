export default [
  {
    name: 'input.scss',
    data: '.asdf {\n  $bwidth: 52px;\n  left: -$bwidth/3;\n  right: (1/3);\n  center: (10000/3);\n  blah: (20/8);\n}',
  },
  {
    name: 'output.css',
    data: '.asdf {\n  left: -17.3333333333px;\n  right: 0.3333333333;\n  center: 3333.3333333333;\n  blah: 2.5;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(-$bwidth, 3) or calc(-1 * $bwidth / 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 |   left: -$bwidth/3;\n  |         ^^^^^^^^^^\n  '\n    input.scss 3:9  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 3) or calc(1 / 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n4 |   right: (1/3);\n  |           ^^^\n  '\n    input.scss 4:11  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(10000, 3) or calc(10000 / 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n5 |   center: (10000/3);\n  |            ^^^^^^^\n  '\n    input.scss 5:12  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(20, 8) or calc(20 / 8)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n6 |   blah: (20/8);\n  |          ^^^^\n  '\n    input.scss 6:10  root stylesheet\n",
  },
]
