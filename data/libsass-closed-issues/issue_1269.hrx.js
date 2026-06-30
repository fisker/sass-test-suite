export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n\n@function push($list, $items...) {\n  @return list.join($list, $items, $separator: auto);\n}\n\n.test {\n  $list: push(1 2 3, 4, 5);\n  list: meta.inspect($list);\n  value: list.nth($list, 4);\n}',
  },
  {
    name: 'output.css',
    data: '.test {\n  list: 1 2 3 4 5;\n  value: 4;\n}\n',
  },
]
