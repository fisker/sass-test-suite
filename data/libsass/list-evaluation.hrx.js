// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/list-evaluation.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\ndiv {\n  $things: red 2/3 blue;\n  content: $things;\n  content: list.nth($things, 2);\n  content: meta.type-of(list.nth($things, 2));\n  content: meta.type-of(list.nth($things, 3));\n  /**** #{2+2} ****/\n  content: (1 / 2 3 / 4) + (5/6 7/8);\n  content: (1/2 3/4), (5/6 7/8);\n  /**** ****/\n  @each $x in 1 2 3/4 {\n    foo: $x;\n    bar: $x + 1;\n  }\n  /*** ***/\n  stuff: 1, (2 3/4 5), 6;\n  stuff: ((1 + 2)/3/4);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: red 2/3 blue;\n  content: 0.6666666667;\n  content: number;\n  content: color;\n  /**** 4 ****/\n  content: 1/2 3/45/6 7/8;\n  content: 1/2 3/4, 5/6 7/8;\n  /**** ****/\n  foo: 1;\n  bar: 2;\n  foo: 2;\n  bar: 3;\n  foo: 0.75;\n  bar: 1.75;\n  /*** ***/\n  stuff: 1, 2 3/4 5, 6;\n  stuff: 0.25;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(2, 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n6 |   content: list.nth($things, 2);\n  |            ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 6:12  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(2, 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n7 |   content: meta.type-of(list.nth($things, 2));\n  |                         ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 7:25  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n13 |   @each $x in 1 2 3/4 {\n   |               ^^^^^^^\n   '\n    input.scss 13:15  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1 + 2, 3) or calc((1 + 2) / 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n19 |   stuff: ((1 + 2)/3/4);\n   |           ^^^^^^^^^\n   '\n    input.scss 19:11  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(math.div(1 + 2, 3), 4) or calc((1 + 2) / 3 / 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n19 |   stuff: ((1 + 2)/3/4);\n   |           ^^^^^^^^^^^\n   '\n    input.scss 19:11  root stylesheet\n",
  },
]
