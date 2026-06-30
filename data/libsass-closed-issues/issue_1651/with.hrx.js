// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1651/with.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  display: block;\n}\n.b {\n  @at-root (with: media) {\n    @extend .a;\n  }\n} \n',
  },
  {
    name: 'error',
    data: "Error: @extend may only be used within style rules.\n  ,\n6 |     @extend .a;\n  |     ^^^^^^^^^^\n  '\n  input.scss 6:5  root stylesheet\n",
  },
]
