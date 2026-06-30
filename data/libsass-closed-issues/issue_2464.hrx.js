export default [
  {
    name: 'input.scss',
    data: ':host(:not(.foo)) {\r\n    left: 0;\r\n}\r\n\r\nfoobar {\r\n    :host(:not(.foo)) {\r\n        left: 0;\r\n    }\r\n}',
  },
  {
    name: 'output.css',
    data: ':host(:not(.foo)) {\n  left: 0;\n}\n\nfoobar :host(:not(.foo)) {\n  left: 0;\n}\n',
  },
]
