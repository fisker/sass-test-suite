// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/interpolation/error-1.hrx

export default [
  {
    name: 'input.scss',
    data: "'#{)'{\n",
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | '#{)'{\n  |  ^^\n  '\n  input.scss 1:2  root stylesheet\n",
  },
]
