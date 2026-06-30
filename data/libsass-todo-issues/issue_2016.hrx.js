// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_2016.hrx

export default [
  {
    name: 'input.scss',
    data: '$_: ___((Classes and IDs must follow a specific grammar. And this thing here doesn’t.));',
  },
  {
    name: 'error',
    data: "Error: Expected identifier.\n  ,\n1 | $_: ___((Classes and IDs must follow a specific grammar. And this thing here doesn’t.));\n  |                                                         ^\n  '\n  input.scss 1:57  root stylesheet\n",
  },
]
