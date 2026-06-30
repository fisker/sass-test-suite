export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@function map-each($map) {\n  $values: ();\n\n  @each $key, $value in $map {\n    $values: list.append($values, $value);\n  }\n\n  @return $values;\n}\n\n$map: (foo: bar);\n\n.test {\n  -map-test: map-each($map);\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  -map-test: bar;\n}\n',
  },
]
