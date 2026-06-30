// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1231.hrx

export default [
  {
    name: 'input.scss',
    data: 'div::before {\n  content: #{"\\""+\\e600+"\\""};\n}',
  },
  {
    name: 'output.css',
    data: 'div::before {\n  content: "\\e600";\n}\n',
  },
]
