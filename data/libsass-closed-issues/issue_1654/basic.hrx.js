// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1654/basic.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {\n  &bar {\n    display: block;\n  }\n  &.bar {\n    display: block;\n  }\n}\nzoo {\n  @extend %foo;\n}',
  },
  {
    name: 'output.css',
    data: 'zoo.bar {\n  display: block;\n}\n',
  },
]
