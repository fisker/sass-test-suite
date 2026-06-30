// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2569.hrx

export default [
  {
    name: 'input.scss',
    data: '@function test() {\n  @if (false) {\n    @return 0;\n  } @else {\n    opacity: 1;\n  }\n}\n\n.my-module {\n  opacity: test();\n}',
  },
  {
    name: 'error',
    data: "Error: @function rules may not contain declarations.\n  ,\n5 |     opacity: 1;\n  |     ^^^^^^^^^^\n  '\n  input.scss 5:5  root stylesheet\n",
  },
]
