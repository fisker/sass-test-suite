export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n$flow: left;\n\n$map: (\n  margin-#{$flow}: 3em,\n  foo: bar,\n);\n\n.test {\n  margin-left: map.get($map, margin-left);\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  margin-left: 3em;\n}\n',
  },
]
