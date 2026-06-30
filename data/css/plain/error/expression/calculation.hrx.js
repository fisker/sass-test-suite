export default [
  {
    name: 'variable/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'variable/plain.css',
    data: 'a {b: calc($var)}\n',
  },
  {
    name: 'variable/error',
    data: "Error: Sass variables aren't allowed in plain CSS.\n  ,\n1 | a {b: calc($var)}\n  |            ^^^^\n  '\n  plain.css 1:12  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interpolation/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interpolation/plain.css',
    data: 'a {b: calc(#{1px})}\n',
  },
  {
    name: 'interpolation/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | a {b: calc(#{1px})}\n  |            ^^^^^^\n  '\n  plain.css 1:12  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'namespaced_function/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'namespaced_function/plain.css',
    data: 'a {b: calc(c.d())}\n',
  },
  {
    name: 'namespaced_function/error',
    data: "Error: Module namespaces aren't allowed in plain CSS.\n  ,\n1 | a {b: calc(c.d())}\n  |            ^^^^^\n  '\n  plain.css 1:12  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'line_noise/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'line_noise/plain.css',
    data: 'a {b: calc(#%^&)}\n',
  },
  {
    name: 'line_noise/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: calc(#%^&)}\n  |             ^\n  '\n  plain.css 1:13  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'wrong_args/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'wrong_args/plain.css',
    data: 'a {b: calc()}\n',
  },
  {
    name: 'wrong_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: calc()}\n  |       ^^^^^^\n  '\n  plain.css 1:7   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
