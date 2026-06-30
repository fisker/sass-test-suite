export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$x: 3/4;\n$xs: hey 3/4 ho;\n\ndiv {\n  /* $x: 3/4 */\n  a: $x;\n  b: hey $x ho;\n  /* $xs: hey 3/4 ho */\n  c: $xs;\n  d: list.nth($xs, 2);\n  e: list.nth($xs, 2) == 0.75;\n  f: meta.type-of(list.nth($xs, 2));\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  /* $x: 3/4 */\n  a: 0.75;\n  b: hey 0.75 ho;\n  /* $xs: hey 3/4 ho */\n  c: hey 3/4 ho;\n  d: 0.75;\n  e: true;\n  f: number;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 | $x: 3/4;\n  |     ^^^\n  '\n    input.scss 3:5  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n12 |   d: list.nth($xs, 2);\n   |      ^^^^^^^^^^^^^^^^\n   '\n    input.scss 12:6  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n13 |   e: list.nth($xs, 2) == 0.75;\n   |      ^^^^^^^^^^^^^^^^\n   '\n    input.scss 13:6  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n14 |   f: meta.type-of(list.nth($xs, 2));\n   |                   ^^^^^^^^^^^^^^^^\n   '\n    input.scss 14:19  root stylesheet\n",
  },
]
