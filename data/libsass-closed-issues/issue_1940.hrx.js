export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n// ----\r\n// libsass (v3.3.2)\r\n// ----\r\n\r\n$prefix:(\r\n\tfoo: foo,\r\n\tbar: #bar\r\n);\r\n\r\n#{map.get($prefix, foo)} {\r\n  color: red;\r\n}\r\n#{map.get($prefix, bar)} {\r\n  color: red;\r\n}\r\n\r\n#{map.get($prefix, foo)} .baz {\r\n  color: red;\r\n}\r\n#{map.get($prefix, bar)} .baz {\r\n  color: red;\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: red;\n}\n\n#bar {\n  color: red;\n}\n\nfoo .baz {\n  color: red;\n}\n\n#bar .baz {\n  color: red;\n}\n',
  },
]
