export default [
  {
    name: 'hue/type/input.scss',
    data: 'a {\n  b: hsl("foo", 100%, 50%, 0.5);\n}\n',
  },
  {
    name: 'hue/type/error',
    data: 'Error: $hue: "foo" is not a number.\n  ,\n2 |   b: hsl("foo", 100%, 50%, 0.5);\n  |      ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'saturation/type/input.scss',
    data: 'a {\n  b: hsl(0, "foo", 50%, 0.5);\n}\n',
  },
  {
    name: 'saturation/type/error',
    data: 'Error: $saturation: "foo" is not a number.\n  ,\n2 |   b: hsl(0, "foo", 50%, 0.5);\n  |      ^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'lightness/type/input.scss',
    data: 'a {\n  b: hsl(0, 100%, "foo", 0.5);\n}\n',
  },
  {
    name: 'lightness/type/error',
    data: 'Error: $lightness: "foo" is not a number.\n  ,\n2 |   b: hsl(0, 100%, "foo", 0.5);\n  |      ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'alpha/unit/input.scss',
    data: 'a {\n  b: hsl(0, 0%, 0%, 0.5px);\n}\n',
  },
  {
    name: 'alpha/unit/error',
    data: 'Error: $alpha: Expected 0.5px to have unit "%" or no units.\n  ,\n2 |   b: hsl(0, 0%, 0%, 0.5px);\n  |      ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
]
