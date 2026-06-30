export default [
  {
    name: 'input.scss',
    data: '@function parent() {\n  @mixin nested {\n    foo: bar;\n  }\n\n  @include nested;\n}\n\n\ntest {\n  foo: parent();\n}\n',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @mixin nested {\n  |   ^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
