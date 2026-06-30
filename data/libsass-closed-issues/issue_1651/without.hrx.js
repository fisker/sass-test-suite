// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1651/without.hrx

export default [
  {
    name: 'input.scss',
    data: '.a {\n  display: block;\n}\n\n.b {\n  @at-root (without: media) {\n    @extend .a;\n  }\n} \n',
  },
  {
    name: 'output.css',
    data: '.a, .b {\n  display: block;\n}\n',
  },
]
