export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@function foo($a, $should-be-empty...) {\n  @return list.length($should-be-empty);\n}\n\n@function bar($args...) {\n  @return meta.call(foo, $args...);\n}\n\n@function args($args...) {\n  @return $args;\n}\n\n$a: args(1, 2, 3);\n\ntest {\n  test: bar($a);\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  test: 0;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(foo))\n\n  ,\n8 |   @return meta.call(foo, $args...);\n  |           ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 8:11  bar()\n    input.scss 18:9  root stylesheet\n",
  },
]
