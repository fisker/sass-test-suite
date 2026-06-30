// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/space.hrx

export default [
  {
    name: 'number_number/input.scss',
    data: 'a {b: calc(1 2)}\n',
  },
  {
    name: 'number_number/error',
    data: "Error: Missing math operator.\n  ,\n1 | a {b: calc(1 2)}\n  |            ^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'number_operation/input.scss',
    data: 'a {b: calc(1 3 + 4)}\n',
  },
  {
    name: 'number_operation/error',
    data: "Error: Missing math operator.\n  ,\n1 | a {b: calc(1 3 + 4)}\n  |            ^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'number_paren/input.scss',
    data: 'a {b: calc(1 (3))}\n',
  },
  {
    name: 'number_paren/error',
    data: "Error: Missing math operator.\n  ,\n1 | a {b: calc(1 (3))}\n  |            ^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'number_calc/input.scss',
    data: 'a {b: calc(1 calc(1px + 1%))}\n',
  },
  {
    name: 'number_calc/error',
    data: "Error: Missing math operator.\n  ,\n1 | a {b: calc(1 calc(1px + 1%))}\n  |            ^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'operation_operation/input.scss',
    data: 'a {b: calc(1 + 2 3 + 4)}\n',
  },
  {
    name: 'operation_operation/error',
    data: "Error: Missing math operator.\n  ,\n1 | a {b: calc(1 + 2 3 + 4)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'string_number_number/input.scss',
    data: 'a {b: calc(c 1 2)}\n',
  },
  {
    name: 'string_number_number/error',
    data: "Error: Missing math operator.\n  ,\n1 | a {b: calc(c 1 2)}\n  |              ^^^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
  {
    name: 'number_number_string/input.scss',
    data: 'a {b: calc(1 2 c)}\n',
  },
  {
    name: 'number_number_string/error',
    data: "Error: Missing math operator.\n  ,\n1 | a {b: calc(1 2 c)}\n  |            ^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'through_variable/input.scss',
    data: '$c: 1;\n$d: 2;\na {b: calc($c $d)}\n',
  },
  {
    name: 'through_variable/error',
    data: "Error: Missing math operator.\n  ,\n3 | a {b: calc($c $d)}\n  |            ^^^^^\n  '\n  input.scss 3:12  root stylesheet\n",
  },
]
