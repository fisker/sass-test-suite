// https://github.com/sass/sass-spec/blob/HEAD/spec/values/maps/errors.hrx

export default [
  {
    name: 'input.scss',
    data: '$map: ( foo: bar );\ntest { baz: $map; }\n',
  },
  {
    name: 'error',
    data: "Error: (foo: bar) isn't a valid CSS value.\n  ,\n2 | test { baz: $map; }\n  |             ^^^^\n  '\n  input.scss 2:13  root stylesheet\n",
  },
]
