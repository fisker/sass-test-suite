// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/error/expression/operation.hrx

export default [
  {
    name: 'addition/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'addition/plain.css',
    data: 'a {\n  x: y + z;\n}\n',
  },
  {
    name: 'addition/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y + z;\n  |        ^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'subtraction/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'subtraction/plain.css',
    data: 'a {\n  x: y - z;\n}\n',
  },
  {
    name: 'subtraction/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y - z;\n  |        ^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'multiplication/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'multiplication/plain.css',
    data: 'a {\n  x: y * z;\n}\n',
  },
  {
    name: 'multiplication/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y * z;\n  |        ^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'modulo/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'modulo/plain.css',
    data: 'a {\n  x: y % z;\n}\n',
  },
  {
    name: 'modulo/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y % z;\n  |        ^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'less_than/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'less_than/plain.css',
    data: 'a {\n  x: y < z;\n}\n',
  },
  {
    name: 'less_than/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y < z;\n  |        ^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'less_than_or_equal/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'less_than_or_equal/plain.css',
    data: 'a {\n  x: y <= z;\n}\n',
  },
  {
    name: 'less_than_or_equal/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y <= z;\n  |        ^^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'greater_than/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'greater_than/plain.css',
    data: 'a {\n  x: y > z;\n}\n',
  },
  {
    name: 'greater_than/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y > z;\n  |        ^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'greater_than_or_equal/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'greater_than_or_equal/plain.css',
    data: 'a {\n  x: y >= z;\n}\n',
  },
  {
    name: 'greater_than_or_equal/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y >= z;\n  |        ^^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'equals/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'equals/plain.css',
    data: 'a {\n  x: y == z;\n}\n',
  },
  {
    name: 'equals/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y == z;\n  |        ^^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'not_equals/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'not_equals/plain.css',
    data: 'a {\n  x: y != z;\n}\n',
  },
  {
    name: 'not_equals/error',
    data: "Error: Operators aren't allowed in plain CSS.\n  ,\n2 |   x: y != z;\n  |        ^^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
