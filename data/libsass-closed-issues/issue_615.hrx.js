// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_615.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: "bar";\n%#{"foo--#{$foo}"} {\n  foo: bar;\n}\n\na {\n  @extend %foo--bar;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  foo: bar;\n}\n',
  },
]
