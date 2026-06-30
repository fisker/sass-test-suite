// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2309.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:list\";\n@use \"sass:map\";\n$button-sizes: (\r\n  'xs': (\r\n    'line-height': 16 / 12,\r\n  ),\r\n  's': (\r\n    'line-height': 18 / 14,\r\n  ),\r\n  'm': (\r\n    'line-height': 18 / 14,\r\n  ),\r\n  'l': (\r\n    'line-height': 22 / 16,\r\n  )\r\n);\r\n\r\n@each $size in $button-sizes {\r\n  $size-metrics: list.nth($size, 2);\r\n\r\n  .c-button__icon {\r\n    min-height: map.get($size-metrics, 'line-height') * 1em;\r\n  }\r\n}",
  },
  {
    name: 'output.css',
    data: '.c-button__icon {\n  min-height: 1.3333333333em;\n}\n\n.c-button__icon {\n  min-height: 1.2857142857em;\n}\n\n.c-button__icon {\n  min-height: 1.2857142857em;\n}\n\n.c-button__icon {\n  min-height: 1.375em;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(16, 12) or calc(16 / 12)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n5 |     'line-height': 16 / 12,\r\n  |                    ^^^^^^^\n  '\n    input.scss 5:20  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(18, 14) or calc(18 / 14)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n8 |     'line-height': 18 / 14,\r\n  |                    ^^^^^^^\n  '\n    input.scss 8:20  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(18, 14) or calc(18 / 14)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n11 |     'line-height': 18 / 14,\r\n   |                    ^^^^^^^\n   '\n    input.scss 11:20  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(22, 16) or calc(22 / 16)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n14 |     'line-height': 22 / 16,\r\n   |                    ^^^^^^^\n   '\n    input.scss 14:20  root stylesheet\n",
  },
]
