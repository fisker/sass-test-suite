export default [
  {
    name: 'calc/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'calc/plain.css',
    data: 'a {\n  w: calc(#{1px} + 10%);\n}\n',
  },
  {
    name: 'calc/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n2 |   w: calc(#{1px} + 10%);\n  |           ^^^^^^\n  '\n  plain.css 2:11  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'identifier/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'identifier/plain.css',
    data: 'a {\n  w: x#{y}z;\n}\n',
  },
  {
    name: 'identifier/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n2 |   w: x#{y}z;\n  |       ^^^^\n  '\n  plain.css 2:7   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'quoted_string/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'quoted_string/plain.css',
    data: 'a {\n  w: "x#{y}z";\n}\n',
  },
  {
    name: 'quoted_string/error',
    data: 'Error: Interpolation isn\'t allowed in plain CSS.\n  ,\n2 |   w: "x#{y}z";\n  |        ^^^^\n  \'\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'standalone/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'standalone/plain.css',
    data: 'a {\n  w: #{x};\n}\n',
  },
  {
    name: 'standalone/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n2 |   w: #{x};\n  |      ^^^^\n  '\n  plain.css 2:6   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
