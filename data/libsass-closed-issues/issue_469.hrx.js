// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_469.hrx

export default [
  {
    name: 'input.scss',
    data: '/*!\n*/\n\n@charset "utf-8";\n\na {\n  color: red;\n}\n\n@import url("x");\n',
  },
  {
    name: 'output.css',
    data: '/*!\n*/\n@import url("x");\na {\n  color: red;\n}\n',
  },
]
