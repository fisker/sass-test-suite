export default [
  {
    name: 'input.scss',
    data: 'foo {\n  foo: foo(());\n}\n',
  },
  {
    name: 'error',
    data: "Error: () isn't a valid CSS value.\n  ,\n2 |   foo: foo(());\n  |            ^^ value\n  |        ======= unknown function treated as plain CSS\n  '\n  input.scss 2:12  root stylesheet\n",
  },
]
