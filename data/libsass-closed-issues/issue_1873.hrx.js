// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1873.hrx

export default [
  {
    name: 'input.scss',
    data: '.a {\n  display: block;\n}\n\n.b {\n  @at-root (with: media) {\n    @extend .a;\n  }\n}',
  },
  {
    name: 'error',
    data: "Error: @extend may only be used within style rules.\n  ,\n7 |     @extend .a;\n  |     ^^^^^^^^^^\n  '\n  input.scss 7:5  root stylesheet\n",
  },
]
