// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/invalid-parent/return-in-root.hrx

export default [
  {
    name: 'input.scss',
    data: '@return 42;',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n1 | @return 42;\n  | ^^^^^^^^^^\n  '\n  input.scss 1:1  root stylesheet\n",
  },
]
