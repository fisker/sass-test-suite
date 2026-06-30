export default [
  {
    name: 'input.scss',
    data: '/** comment 1 */\n@import url("import-1");\n/** comment 2 */\n@import url("import-2");\n/** comment 3 */\nfoo { bar: baz; }\n',
  },
  {
    name: 'output.css',
    data: '/** comment 1 */\n@import url("import-1");\n/** comment 2 */\n@import url("import-2");\n/** comment 3 */\nfoo {\n  bar: baz;\n}\n',
  },
]
