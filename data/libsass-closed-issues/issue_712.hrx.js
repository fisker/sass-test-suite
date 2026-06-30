// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_712.hrx

export default [
  {
    name: 'input.scss',
    data: ".foo {\n  content: 'foo';\n}\n\n@media print {\n  .bar {\n    @extend .foo;\n  }\n}\n",
  },
  {
    name: 'error',
    data: "Error: From line 1, column 1 of input.scss: \n  ,\n1 | .foo {\n  | ^^^^^\n  '\nYou may not @extend selectors across media queries.\n  ,\n7 |     @extend .foo;\n  |     ^^^^^^^^^^^^\n  '\n  input.scss 7:5  root stylesheet\n",
  },
]
