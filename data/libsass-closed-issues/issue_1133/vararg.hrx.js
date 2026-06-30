export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@function foo($this, $my) {\n  @return (this: $this, my: $my);\n}\n\na {\n  $map: foo((this: is, my: map)...);\n  @each $k, $v in $map {\n    #{$k}: $v;\n  }\n}\n\nb {\n  $map: meta.call("foo", (this: is, my: map)...);\n  @each $k, $v in $map {\n    #{$k}: $v;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  this: is;\n  my: map;\n}\n\nb {\n  this: is;\n  my: map;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function("foo"))\n\n   ,\n14 |   $map: meta.call("foo", (this: is, my: map)...);\n   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   \'\n    input.scss 14:9  root stylesheet\n',
  },
]
