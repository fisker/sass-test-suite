export default [
  {
    name: 'input.scss',
    data: '$x: 10px / 5px;\r\n\r\ntest {\r\n    font-size: $x;\r\n    font-size: #{$x};\r\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  font-size: 2;\n  font-size: 2;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(10px, 5px)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | $x: 10px / 5px;\r\n  |     ^^^^^^^^^^\n  '\n    input.scss 1:5  root stylesheet\n",
  },
]
