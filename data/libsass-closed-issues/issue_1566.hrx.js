// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1566.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@function foo($predicate) {\n  @return meta.call(\'bar\', $predicate);\n}\n\n@function bar($predicate) {\n  @return meta.type-of($predicate);\n}\n\ntest {\n  test: foo(1 2 3);\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  test: list;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(\"bar\"))\n\n  ,\n3 |   @return meta.call('bar', $predicate);\n  |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 3:11  foo()\n    input.scss 11:9  root stylesheet\n",
  },
]
