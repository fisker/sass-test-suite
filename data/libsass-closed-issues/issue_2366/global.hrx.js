export default [
  {
    name: 'input.scss',
    data: '.item {\r\n    display: inline-block;\r\n\r\n    :global(> .ext-link) {\r\n        background: #000;\r\n    }\r\n}\r\n\r\n.link {\r\n    color: red;\r\n}\r\n\r\n.textLink {\r\n    @extend .link;\r\n    padding: 0 10px;\r\n}',
  },
  {
    name: 'output.css',
    data: '.item {\n  display: inline-block;\n}\n.item :global(> .ext-link) {\n  background: #000;\n}\n\n.link, .textLink {\n  color: red;\n}\n\n.textLink {\n  padding: 0 10px;\n}\n',
  },
]
