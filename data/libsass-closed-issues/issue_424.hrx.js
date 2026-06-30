// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_424.hrx

export default [
  {
    name: 'input.scss',
    data: 'footer {\r\n    color: red;\r\n}\r\n\r\n// Ampersand in SassScript:\r\n/*.button {\r\n    &-primary {\r\n        background: orange;\r\n    }\r\n\r\n    &-secondary {\r\n        background: blue;\r\n    }\r\n}*/\r\n\r\n// Output:\r\n.button-primary {\r\n    background: orange;\r\n}\r\n\r\n.button-secondary {\r\n    background: blue;\r\n}',
  },
  {
    name: 'output.css',
    data: 'footer {\n  color: red;\n}\n\n/*.button {\n    &-primary {\n        background: orange;\n    }\n\n    &-secondary {\n        background: blue;\n    }\n}*/\n.button-primary {\n  background: orange;\n}\n\n.button-secondary {\n  background: blue;\n}\n',
  },
]
