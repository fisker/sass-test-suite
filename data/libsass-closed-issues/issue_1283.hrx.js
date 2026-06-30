export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\n\n$map: map.merge((1 2: 3), (2 1: 3));\n\n.test {\n  test: meta.inspect($map);\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  test: (1 2: 3, 2 1: 3);\n}\n',
  },
]
