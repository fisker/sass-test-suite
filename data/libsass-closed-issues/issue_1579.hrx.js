export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@function foo($a, $b: null, $c: false) {\n  @return $c;\n}\n\n@function bar($args...) {\n  @return meta.call(foo, $args...);\n}\n\ntest {\n  test: bar(3, $c: true);\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  test: true;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(foo))\n\n  ,\n7 |   @return meta.call(foo, $args...);\n  |           ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 7:11  bar()\n    input.scss 11:9  root stylesheet\n",
  },
]
