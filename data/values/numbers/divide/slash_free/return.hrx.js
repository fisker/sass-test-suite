// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/divide/slash_free/return.hrx

export default [
  {
    name: 'user_defined/input.scss',
    data: '@function a() {@return 1/2}\n\nb {c: a()}\n',
  },
  {
    name: 'user_defined/output.css',
    data: 'b {\n  c: 0.5;\n}\n',
  },
  {
    name: 'user_defined/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | @function a() {@return 1/2}\n  |                        ^^^\n  '\n    input.scss 1:24  a()\n    input.scss 3:7   root stylesheet\n",
  },
  {
    name: 'built_in/input.scss',
    data: '@use "sass:list";\na {b: list.nth(3 1/2 4, 2)}\n',
  },
  {
    name: 'built_in/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'built_in/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: list.nth(3 1/2 4, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
]
