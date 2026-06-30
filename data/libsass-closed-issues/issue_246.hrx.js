export default [
  {
    name: 'input.scss',
    data: '$content-width: 960px;\r\n\r\n/* demo.css: */\r\n.selector {\r\n  padding: 0 calc(100%/2 - #{$content-width/2})\r\n}\r\n\r\n\r\n/* bin/sassc demo.scss */\r\n.selector {\r\n  padding: 0 calc(100%/2 - #{$content-width/2}); }',
  },
  {
    name: 'output.css',
    data: '/* demo.css: */\n.selector {\n  padding: 0 calc(50% - 480px);\n}\n\n/* bin/sassc demo.scss */\n.selector {\n  padding: 0 calc(50% - 480px);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div($content-width, 2) or calc($content-width / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n5 |   padding: 0 calc(100%/2 - #{$content-width/2})\r\n  |                              ^^^^^^^^^^^^^^^^\n  '\n    input.scss 5:30  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div($content-width, 2) or calc($content-width / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n11 |   padding: 0 calc(100%/2 - #{$content-width/2}); }\n   |                              ^^^^^^^^^^^^^^^^\n   '\n    input.scss 11:30  root stylesheet\n",
  },
]
