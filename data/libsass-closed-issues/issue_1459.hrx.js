// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1459.hrx

export default [
  {
    name: 'input.scss',
    data: '@font-face {\r\n  font-family: "Font Name";\r\n  src: local("Arial");\r\n  unicode-range: U+270C;\r\n}',
  },
  {
    name: 'output.css',
    data: '@font-face {\n  font-family: "Font Name";\n  src: local("Arial");\n  unicode-range: U+270C;\n}\n',
  },
]
