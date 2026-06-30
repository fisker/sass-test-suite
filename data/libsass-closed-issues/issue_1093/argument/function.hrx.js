export default [
  {
    name: 'input.scss',
    data: '@function foo($bar:#{}) {\n  @return $bar;\n}\n\n$foo: foo();\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | @function foo($bar:#{}) {\n  |                    ^^\n  '\n  input.scss 1:20  root stylesheet\n",
  },
]
