export default [
  {
    name: 'nested/input.sass',
    data: '.no-nesting\n  --foo: bar\n    baz: qux\n',
  },
  {
    name: 'nested/error',
    data: "Error: Nothing may be indented beneath a custom property.\n  ,\n3 |     baz: qux\n  |     ^\n  '\n  input.sass 3:5  root stylesheet\n",
  },
  {
    name: 'brackets/curly/input.scss',
    data: '.curly {\n  --prop: };\n}\n',
  },
  {
    name: 'brackets/curly/error',
    data: 'Error: unmatched "}".\n  ,\n3 | }\n  | ^\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'brackets/paren/input.scss',
    data: '.paren {\n  --prop: );\n}\n',
  },
  {
    name: 'brackets/paren/error',
    data: 'Error: expected ";".\n  ,\n2 |   --prop: );\n  |           ^\n  \'\n  input.scss 2:11  root stylesheet\n',
  },
  {
    name: 'brackets/square/input.scss',
    data: '.square {\n  --prop: ];\n}\n',
  },
  {
    name: 'brackets/square/error',
    data: 'Error: expected ";".\n  ,\n2 |   --prop: ];\n  |           ^\n  \'\n  input.scss 2:11  root stylesheet\n',
  },
  {
    name: 'brackets/curly_in_square/input.scss',
    data: '.curly-in-square {\n  --prop: [{];\n}\n',
  },
  {
    name: 'brackets/curly_in_square/error',
    data: 'Error: expected "}".\n  ,\n2 |   --prop: [{];\n  |             ^\n  \'\n  input.scss 2:13  root stylesheet\n',
  },
  {
    name: 'brackets/paren_in_curly/input.scss',
    data: '.paren-in-curly {\n  --prop: {(};\n}\n',
  },
  {
    name: 'brackets/paren_in_curly/error',
    data: 'Error: expected ")".\n  ,\n2 |   --prop: {(};\n  |             ^\n  \'\n  input.scss 2:13  root stylesheet\n',
  },
  {
    name: 'brackets/square_in_paren/input.scss',
    data: '.square-in-paren {\n  --prop: ([);\n}\n',
  },
  {
    name: 'brackets/square_in_paren/error',
    data: 'Error: expected "]".\n  ,\n2 |   --prop: ([);\n  |             ^\n  \'\n  input.scss 2:13  root stylesheet\n',
  },
]
