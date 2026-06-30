// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1394.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  width: \\10 + \\20 \\ ;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  width: \\10 \\ \\ ;\n}\n',
  },
]
