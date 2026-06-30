// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/lists.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\ndiv {\n  $list: list.append(1/2 3, 4);\n  content: (1 2 3) == (1, 2, 3);\n  content: (1 2 3) == (1 2 3);\n  content: var $list;\n  content: lit (1/2 3 4);\n  content: (1/2 3 4) == $list;\n  a: list.length((1/2 3 4)), list.length($list);\n  b: list.nth((1/2 3 4), 1), list.nth($list, 1);\n  content: (1/2 3 4) == (1/2 3 4);\n  /***/\n  content: list.length($list);\n  content: meta.type-of(list.nth($list, 1));\n  content: list.nth($list, 1);\n  content: list.nth(1/2 3 4, 1);\n  $a: 1 2 3;\n  $b: (1 2 3);\n  content: $a == $b;\n  content: 1 2 () 3;\n  color: red == #ff0000;\n  $color-list : fudge red blue;\n  color: list.nth($color-list, 2) == #ff0000;\n  color: list.nth($color-list, 2) == red;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: false;\n  content: true;\n  content: var 1/2 3 4;\n  content: lit 1/2 3 4;\n  content: true;\n  a: 3, 3;\n  b: 0.5, 0.5;\n  content: true;\n  /***/\n  content: 3;\n  content: number;\n  content: 0.5;\n  content: 0.5;\n  content: true;\n  content: 1 2 3;\n  color: true;\n  color: true;\n  color: true;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n11 |   b: list.nth((1/2 3 4), 1), list.nth($list, 1);\n   |      ^^^^^^^^^^^^^^^^^^^^^^\n   '\n    input.scss 11:6  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n11 |   b: list.nth((1/2 3 4), 1), list.nth($list, 1);\n   |                              ^^^^^^^^^^^^^^^^^^\n   '\n    input.scss 11:30  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n15 |   content: meta.type-of(list.nth($list, 1));\n   |                         ^^^^^^^^^^^^^^^^^^\n   '\n    input.scss 15:25  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n16 |   content: list.nth($list, 1);\n   |            ^^^^^^^^^^^^^^^^^^\n   '\n    input.scss 16:12  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n17 |   content: list.nth(1/2 3 4, 1);\n   |            ^^^^^^^^^^^^^^^^^^^^\n   '\n    input.scss 17:12  root stylesheet\n",
  },
]
