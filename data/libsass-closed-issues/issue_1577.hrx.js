// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1577.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 10%; // line 1\n// line 2\n$error: $foo + 20px; // line 3\n',
  },
  {
    name: 'error',
    data: "Error: 10% and 20px have incompatible units.\n  ,\n3 | $error: $foo + 20px; // line 3\n  |         ^^^^^^^^^^^\n  '\n  input.scss 3:9  root stylesheet\n",
  },
]
