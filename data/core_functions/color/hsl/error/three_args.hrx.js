// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/error/three_args.hrx

export default [
  {
    name: 'hue/type/input.scss',
    data: 'a {\n  b: hsl("foo", 100%, 50%);\n}\n',
  },
  {
    name: 'hue/type/error',
    data: 'Error: $hue: "foo" is not a number.\n  ,\n2 |   b: hsl("foo", 100%, 50%);\n  |      ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'saturation/type/input.scss',
    data: 'a {\n  b: hsl(0, "foo", 50%);\n}\n',
  },
  {
    name: 'saturation/type/error',
    data: 'Error: $saturation: "foo" is not a number.\n  ,\n2 |   b: hsl(0, "foo", 50%);\n  |      ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'lightness/type/input.scss',
    data: 'a {\n  b: hsl(0, 100%, "foo");\n}\n',
  },
  {
    name: 'lightness/type/error',
    data: 'Error: $lightness: "foo" is not a number.\n  ,\n2 |   b: hsl(0, 100%, "foo");\n  |      ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
]
