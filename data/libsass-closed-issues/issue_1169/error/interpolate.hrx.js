export default [
  {
    name: 'input.scss',
    data: "@use \"sass:meta\";\n\n$map: (\n  'red': 'bar',\n  #{re}#{'d'}: 'baz',\n);\n\n.foo {\n  content: meta.inspect($map);\n}",
  },
  {
    name: 'error',
    data: "Error: Duplicate key.\n  ,\n4 |   'red': 'bar',\n  |   ===== first key\n5 |   #{re}#{'d'}: 'baz',\n  |   ^^^^^^^^^^^ second key\n  '\n  input.scss 5:3  root stylesheet\n",
  },
]
