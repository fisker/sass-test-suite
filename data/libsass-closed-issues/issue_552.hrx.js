// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_552.hrx

export default [
  {
    name: 'input.scss',
    data: 'a,\ndiv {\n    top: 0;\n}\n\n.a,\n.b {\n    &.c {\n        color: red;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a,\ndiv {\n  top: 0;\n}\n\n.a.c,\n.b.c {\n  color: red;\n}\n',
  },
]
