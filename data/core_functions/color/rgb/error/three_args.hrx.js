// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/rgb/error/three_args.hrx

export default [
  {
    name: 'red/type/input.scss',
    data: 'a {\n  b: rgb("foo", 0, 0);\n}\n',
  },
  {
    name: 'red/type/error',
    data: 'Error: $red: "foo" is not a number.\n  ,\n2 |   b: rgb("foo", 0, 0);\n  |      ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'green/type/input.scss',
    data: 'a {\n  b: rgb(0, "foo", 0);\n}\n',
  },
  {
    name: 'green/type/error',
    data: 'Error: $green: "foo" is not a number.\n  ,\n2 |   b: rgb(0, "foo", 0);\n  |      ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'blue/type/input.scss',
    data: 'a {\n  b: rgb(0, 0, "foo");\n}\n',
  },
  {
    name: 'blue/type/error',
    data: 'Error: $blue: "foo" is not a number.\n  ,\n2 |   b: rgb(0, 0, "foo");\n  |      ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
]
