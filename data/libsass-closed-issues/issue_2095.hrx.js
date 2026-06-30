// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2095.hrx

export default [
  {
    name: 'input.scss',
    data: '@media all {\n  @mixin foo() {}\n}\n',
  },
  {
    name: 'expected_output.scss',
    data: '',
  },
  {
    name: 'output.css',
    data: '',
  },
]
