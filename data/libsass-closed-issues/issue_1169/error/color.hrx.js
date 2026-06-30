export default [
  {
    name: 'input.scss',
    data: "@use \"sass:meta\";\n\n$map: (\n  red: 'foo',\n  red: 'bar',\n);\n\n.foo {\n  content: meta.inspect($map);\n}",
  },
  {
    name: 'error',
    data: "Error: Duplicate key.\n  ,\n4 |   red: 'foo',\n  |   === first key\n5 |   red: 'bar',\n  |   ^^^ second key\n  '\n  input.scss 5:3  root stylesheet\n",
  },
]
