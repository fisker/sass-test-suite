export default [
  {
    name: 'input.scss',
    data: '@mixin a {\n  b: c;\n}\n\n@include a();',
  },
  {
    name: 'error',
    data: "Error: Declarations may only be used within style rules.\n  ,\n2 |   b: c;\n  |   ^^^^\n  '\n  input.scss 2:3  a()\n  input.scss 5:1  root stylesheet\n",
  },
]
