export default [
  {
    name: 'input.scss',
    data: '@media screen {\n  a {\n    color: black;\n    height: 8px;\n  }\n}\n\na {\n  color: red;\n  @media screen {\n    color: blue;\n    height: 10px;\n  }\n}\n\na {\n  color: beige;\n  b {\n    color: teal;\n    @media screen {\n      color: orange;\n      c {\n        height: 12px;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  a {\n    color: black;\n    height: 8px;\n  }\n}\na {\n  color: red;\n}\n@media screen {\n  a {\n    color: blue;\n    height: 10px;\n  }\n}\n\na {\n  color: beige;\n}\na b {\n  color: teal;\n}\n@media screen {\n  a b {\n    color: orange;\n  }\n  a b c {\n    height: 12px;\n  }\n}\n',
  },
]
