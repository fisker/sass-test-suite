// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1248.hrx

export default [
  {
    name: 'input.scss',
    data: '.a.b .c {\n  top: 0;\n}\n.a {\n  @extend .b;\n}\n.a .d {\n  @extend .c;\n}\n',
  },
  {
    name: 'output.css',
    data: '.a.b .c, .a .c, .a .d {\n  top: 0;\n}\n',
  },
]
