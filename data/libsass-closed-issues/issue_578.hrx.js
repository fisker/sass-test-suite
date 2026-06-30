export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$list: one foo three bar six seven;\n$pos: list.set-nth($list, 2, two);\n$neg: list.set-nth($pos, -3, four five);\n\n.test {\n  -positive: $pos;\n  -negative: $neg;\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  -positive: one two three bar six seven;\n  -negative: one two three four five six seven;\n}\n',
  },
]
