// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1585.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin bar() {\n  @at-root { @content; }\n}\n\n.test {\n  @include bar() {\n    color: yellow;\n    .nest2 {\n      color: green;\n    }\n  }\n}\n',
  },
  {
    name: 'error',
    data: "Error: Declarations may only be used within style rules.\n  ,\n7 |     color: yellow;\n  |     ^^^^^^^^^^^^^\n  '\n  input.scss 7:5   @content\n  input.scss 2:14  bar()\n  input.scss 6:3   root stylesheet\n",
  },
]
