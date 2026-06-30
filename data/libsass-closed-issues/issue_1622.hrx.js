// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1622.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@function foo($list) {\n    @return meta.call(bar, $list);\n}\n\n@function bar($list, $args...) {\n    @return list.length($list);\n}\n\ntest {\n  test: foo(1 2 3);\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  test: 3;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(bar))\n\n  ,\n4 |     @return meta.call(bar, $list);\n  |             ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 4:13  foo()\n    input.scss 12:9  root stylesheet\n",
  },
]
