// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/rgb/error/two_args.hrx

export default [
  {
    name: 'color/type/input.scss',
    data: 'a {\n  b: rgb("foo", 0.5);\n}\n',
  },
  {
    name: 'color/type/error',
    data: 'Error: $color: "foo" is not a color.\n  ,\n2 |   b: rgb("foo", 0.5);\n  |      ^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'alpha/type/input.scss',
    data: 'a {\n  b: rgb(#123, "foo");\n}\n',
  },
  {
    name: 'alpha/type/error',
    data: 'Error: $alpha: "foo" is not a number.\n  ,\n2 |   b: rgb(#123, "foo");\n  |      ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'alpha/unit/input.scss',
    data: 'a {\n  b: rgb(#123, 0.5px);\n}\n',
  },
  {
    name: 'alpha/unit/error',
    data: 'Error: $alpha: Expected 0.5px to have unit "%" or no units.\n  ,\n2 |   b: rgb(#123, 0.5px);\n  |      ^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
]
