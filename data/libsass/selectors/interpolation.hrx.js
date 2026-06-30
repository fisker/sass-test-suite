export default [
  {
    name: 'input.scss',
    data: '.foo {\n  content: #{&};\n}\n\n.bar a {\n  content: #{&};\n}\n\n.bar,\n.baz {\n  content: #{&};\n}\n\n.qux {\n  &.waldo {\n    .where & {\n      .final {\n        content: #{&};\n      }\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: .foo;\n}\n\n.bar a {\n  content: .bar a;\n}\n\n.bar,\n.baz {\n  content: .bar, .baz;\n}\n\n.where .qux.waldo .final {\n  content: .where .qux.waldo .final;\n}\n',
  },
]
