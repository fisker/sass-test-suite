// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1075.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$name: "lighten";\n$args: ("color": #ff0000, "amount": 10%);\nfoo {\n  bar: meta.call($name, $args...);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: #ff3333;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(\"lighten\"))\n\n  ,\n5 |   bar: meta.call($name, $args...);\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 5:8  root stylesheet\n\nDEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse color.adjust instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n5 |   bar: meta.call($name, $args...);\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 5:8  root stylesheet\n\nDEPRECATION WARNING [color-functions]: lighten() is deprecated. Suggestions:\n\ncolor.scale($color, $lightness: 20%)\ncolor.adjust($color, $lightness: 10%)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n5 |   bar: meta.call($name, $args...);\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 5:8  root stylesheet\n",
  },
]
