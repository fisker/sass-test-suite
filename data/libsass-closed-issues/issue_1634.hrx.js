// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1634.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$empty-list: ();\n\n@function foo($args...) {\n    @return meta.call(bar, $args...);\n}\n\n@function bar($list) {\n    @return list.length($list);\n}\n\ntest {\n  test: foo($empty-list);\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  test: 0;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(bar))\n\n  ,\n6 |     @return meta.call(bar, $args...);\n  |             ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 6:13  foo()\n    input.scss 14:9  root stylesheet\n",
  },
]
