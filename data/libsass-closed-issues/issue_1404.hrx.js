export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n.test {\r\n    color: #aaabbb--1-2-a;\r\n    color: meta.type-of(#aaabbb--1-2-a);\r\n    color: meta.type-of(#aaabbb--1-2);\r\n}',
  },
  {
    name: 'output.css',
    data: '.test {\n  color: #aaabbb--1-2-a;\n  color: string;\n  color: string;\n}\n',
  },
]
