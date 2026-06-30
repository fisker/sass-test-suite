export default [
  {
    name: 'input.scss',
    data: 'div {\n  width: 3cm * 2in * 2in / 1cm / 1cm;\n  width: 3cm * 2in / 1cm;\n  width: 4cm * (12in / 3in);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  width: 30.48in;\n  width: 6in;\n  width: 16cm;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3cm * 2in * 2in, 1cm) or calc(3cm * 2in * 2in / 1cm)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   width: 3cm * 2in * 2in / 1cm / 1cm;\n  |          ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:10  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(math.div(3cm * 2in * 2in, 1cm), 1cm) or calc(3cm * 2in * 2in / 1cm / 1cm)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   width: 3cm * 2in * 2in / 1cm / 1cm;\n  |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:10  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3cm * 2in, 1cm) or calc(3cm * 2in / 1cm)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 |   width: 3cm * 2in / 1cm;\n  |          ^^^^^^^^^^^^^^^\n  '\n    input.scss 3:10  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(12in, 3in) or calc(12in / 3in)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n4 |   width: 4cm * (12in / 3in);\n  |                 ^^^^^^^^^^\n  '\n    input.scss 4:17  root stylesheet\n",
  },
]
