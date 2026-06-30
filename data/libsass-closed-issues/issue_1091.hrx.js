// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1091.hrx

export default [
  {
    name: 'input.scss',
    data: '.a {\n  top: 0;\n}\n\n.b .c {\n  @extend .a;\n}\n\n.d > .e {\n  @extend .a;\n  @extend .c;\n}\n',
  },
  {
    name: 'output.css',
    data: '.a, .d > .e, .b .c {\n  top: 0;\n}\n',
  },
]
