export default [
  {
    name: 'input.scss',
    data: '$map: (\n  foo: bar,\n  baz: monkey,\n);\n\n.css {\n  @each $key, $value in $map {\n    #{$key}: $value;\n  }\n}\n\n$list: one two, three four five, six seven;\n\n.list {\n  @each $foo, $bar, $baz in $list {\n    #{$foo}: $bar $baz;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.css {\n  foo: bar;\n  baz: monkey;\n}\n\n.list {\n  one: two;\n  three: four five;\n  six: seven;\n}\n',
  },
]
