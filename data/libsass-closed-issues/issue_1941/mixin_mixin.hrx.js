// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1941/mixin_mixin.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin parent {\n  @mixin nested {\n    foo: bar;\n  }\n\n  @include nested;\n}\n\n\ntest {\n  @include parent;\n}\n',
  },
  {
    name: 'error',
    data: "Error: Mixins may not contain mixin declarations.\n  ,\n2 |   @mixin nested {\n  |   ^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
