// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1093/parameter/mixin.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo($bar) {\n  a: $bar;\n}\n\nfoo {\n  @include foo(#{});\n}\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n6 |   @include foo(#{});\n  |                ^^\n  '\n  input.scss 6:16  root stylesheet\n",
  },
]
