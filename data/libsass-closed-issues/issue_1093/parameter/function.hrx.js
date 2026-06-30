export default [
  {
    name: 'input.scss',
    data: '@function foo($bar) {\n  @return $bar;\n}\n\n$foo: foo(#{});\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n5 | $foo: foo(#{});\n  |           ^^\n  '\n  input.scss 5:11  root stylesheet\n",
  },
]
