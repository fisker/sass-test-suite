// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1993.hrx

export default [
  {
    name: 'input.scss',
    data: ".test {\n  @extend #{'%test'} !optional\n}",
  },
  {
    name: 'output.css',
    data: '',
  },
]
