export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: b);\n',
  },
  {
    name: '_other.scss',
    data: '// This file defines no variables.\n',
  },
  {
    name: 'error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @use "other" with ($a: b);\n  |                    ^^^^^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
]
