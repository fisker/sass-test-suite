// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/arg-eval.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@function foo() {\n  @return 1+2 3/4 5+6;\n}\n\n@mixin bar($x: 3/4) {\n  bar-content: $x;\n}\n\ndiv {\n  content: foobar(1+2 3/4 5+6, orange);\n  content: list.append(1+2 2/3 5+6, orange);\n  content: 1+2 2/3 5+6;\n  content: meta.type-of(2/3);\n  content: meta.type-of(orange);\n  content: foo();\n  @include bar();\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: foobar(3 3/4 11, orange);\n  content: 3 2/3 11 orange;\n  content: 3 2/3 11;\n  content: number;\n  content: color;\n  content: 3 3/4 11;\n  bar-content: 0.75;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(2, 3)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n15 |   content: meta.type-of(2/3);\n   |                         ^^^\n   '\n    input.scss 15:25  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n7 | @mixin bar($x: 3/4) {\n  |                ^^^\n  '\n    input.scss 7:16  bar()\n    input.scss 18:3  root stylesheet\n",
  },
]
