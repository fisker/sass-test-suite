// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/operator.hrx

export default [
  {
    name: 'unary_plus/input.scss',
    data: 'a {b: +calc(var(--c))}\n',
  },
  {
    name: 'unary_plus/error',
    data: 'Error: Undefined operation "+calc(var(--c))".\n  ,\n1 | a {b: +calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unary_minus/input.scss',
    data: 'a {b: -(calc(var(--c)))}\n',
  },
  {
    name: 'unary_minus/error',
    data: 'Error: Undefined operation "-calc(var(--c))".\n  ,\n1 | a {b: -(calc(var(--c)))}\n  |       ^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'greater_than/lhs/input.scss',
    data: 'a {b: calc(var(--c)) > 1}\n',
  },
  {
    name: 'greater_than/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) > 1".\n  ,\n1 | a {b: calc(var(--c)) > 1}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'greater_than/rhs/input.scss',
    data: 'a {b: 1 > calc(var(--c))}\n',
  },
  {
    name: 'greater_than/rhs/error',
    data: 'Error: Undefined operation "1 > calc(var(--c))".\n  ,\n1 | a {b: 1 > calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'greater_than/both/input.scss',
    data: 'a {b: calc(var(--c)) > calc(var(--d))}\n',
  },
  {
    name: 'greater_than/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) > calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) > calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'greater_than_or_equals/lhs/input.scss',
    data: 'a {b: calc(var(--c)) >= 1}\n',
  },
  {
    name: 'greater_than_or_equals/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) >= 1".\n  ,\n1 | a {b: calc(var(--c)) >= 1}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'greater_than_or_equals/rhs/input.scss',
    data: 'a {b: 1 >= calc(var(--c))}\n',
  },
  {
    name: 'greater_than_or_equals/rhs/error',
    data: 'Error: Undefined operation "1 >= calc(var(--c))".\n  ,\n1 | a {b: 1 >= calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'greater_than_or_equals/both/input.scss',
    data: 'a {b: calc(var(--c)) >= calc(var(--d))}\n',
  },
  {
    name: 'greater_than_or_equals/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) >= calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) >= calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'less_than/lhs/input.scss',
    data: 'a {b: calc(var(--c)) < 1}\n',
  },
  {
    name: 'less_than/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) < 1".\n  ,\n1 | a {b: calc(var(--c)) < 1}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'less_than/rhs/input.scss',
    data: 'a {b: 1 < calc(var(--c))}\n',
  },
  {
    name: 'less_than/rhs/error',
    data: 'Error: Undefined operation "1 < calc(var(--c))".\n  ,\n1 | a {b: 1 < calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'less_than/both/input.scss',
    data: 'a {b: calc(var(--c)) < calc(var(--d))}\n',
  },
  {
    name: 'less_than/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) < calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) < calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'less_than_or_equals/lhs/input.scss',
    data: 'a {b: calc(var(--c)) <= 1}\n',
  },
  {
    name: 'less_than_or_equals/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) <= 1".\n  ,\n1 | a {b: calc(var(--c)) <= 1}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'less_than_or_equals/rhs/input.scss',
    data: 'a {b: 1 <= calc(var(--c))}\n',
  },
  {
    name: 'less_than_or_equals/rhs/error',
    data: 'Error: Undefined operation "1 <= calc(var(--c))".\n  ,\n1 | a {b: 1 <= calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'less_than_or_equals/both/input.scss',
    data: 'a {b: calc(var(--c)) <= calc(var(--d))}\n',
  },
  {
    name: 'less_than_or_equals/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) <= calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) <= calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'plus/lhs/input.scss',
    data: 'a {b: calc(var(--c)) + 1}\n',
  },
  {
    name: 'plus/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) + 1".\n  ,\n1 | a {b: calc(var(--c)) + 1}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'plus/rhs/input.scss',
    data: 'a {b: 1 + calc(var(--c))}\n',
  },
  {
    name: 'plus/rhs/error',
    data: 'Error: Undefined operation "1 + calc(var(--c))".\n  ,\n1 | a {b: 1 + calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'plus/both/input.scss',
    data: 'a {b: calc(var(--c)) + calc(var(--d))}\n',
  },
  {
    name: 'plus/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) + calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) + calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'minus/lhs/input.scss',
    data: 'a {b: calc(var(--c)) - 1}\n',
  },
  {
    name: 'minus/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) - 1".\n  ,\n1 | a {b: calc(var(--c)) - 1}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'minus/rhs/input.scss',
    data: 'a {b: 1 - calc(var(--c))}\n',
  },
  {
    name: 'minus/rhs/error',
    data: 'Error: Undefined operation "1 - calc(var(--c))".\n  ,\n1 | a {b: 1 - calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'minus/both/input.scss',
    data: 'a {b: calc(var(--c)) - calc(var(--d))}\n',
  },
  {
    name: 'minus/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) - calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) - calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'times/lhs/input.scss',
    data: 'a {b: calc(var(--c)) * 1}\n',
  },
  {
    name: 'times/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) * 1".\n  ,\n1 | a {b: calc(var(--c)) * 1}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'times/rhs/input.scss',
    data: 'a {b: 1 * calc(var(--c))}\n',
  },
  {
    name: 'times/rhs/error',
    data: 'Error: Undefined operation "1 * calc(var(--c))".\n  ,\n1 | a {b: 1 * calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'times/both/input.scss',
    data: 'a {b: calc(var(--c)) * calc(var(--d))}\n',
  },
  {
    name: 'times/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) * calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) * calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'mod/lhs/input.scss',
    data: 'a {b: calc(var(--c)) % 1}\n',
  },
  {
    name: 'mod/lhs/error',
    data: 'Error: Undefined operation "calc(var(--c)) % 1".\n  ,\n1 | a {b: calc(var(--c)) % 1}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'mod/rhs/input.scss',
    data: 'a {b: 1 % calc(var(--c))}\n',
  },
  {
    name: 'mod/rhs/error',
    data: 'Error: Undefined operation "1 % calc(var(--c))".\n  ,\n1 | a {b: 1 % calc(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'mod/both/input.scss',
    data: 'a {b: calc(var(--c)) % calc(var(--d))}\n',
  },
  {
    name: 'mod/both/error',
    data: 'Error: Undefined operation "calc(var(--c)) % calc(var(--d))".\n  ,\n1 | a {b: calc(var(--c)) % calc(var(--d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
]
