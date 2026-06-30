export default [
  {
    name: 'input.scss',
    data: '.md-card\r\n{\r\n    .md-info-card-highlight\r\n    {\r\n        background: red;\r\n        color: blue;\r\n\r\n        .ng-md-icon\r\n        {\r\n            color: green;\r\n        }\r\n    }\r\n}',
  },
  {
    name: 'output.css',
    data: '.md-card .md-info-card-highlight {\n  background: red;\n  color: blue;\n}\n.md-card .md-info-card-highlight .ng-md-icon {\n  color: green;\n}\n',
  },
]
