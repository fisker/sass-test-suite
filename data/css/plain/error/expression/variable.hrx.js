export default [
  {
    name: 'use/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'use/plain.css',
    data: 'a {\n  x: $var;\n}\n',
  },
  {
    name: 'use/error',
    data: "Error: Sass variables aren't allowed in plain CSS.\n  ,\n2 |   x: $var;\n  |      ^^^^\n  '\n  plain.css 2:6   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'declaration/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'declaration/plain.css',
    data: '$var: value;\n',
  },
  {
    name: 'declaration/error',
    data: "Error: Sass variables aren't allowed in plain CSS.\n  ,\n1 | $var: value;\n  | ^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
