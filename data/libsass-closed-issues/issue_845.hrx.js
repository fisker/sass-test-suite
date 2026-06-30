// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_845.hrx

export default [
  {
    name: 'input.sass',
    data: "@charset 'UTF-8'\n\n*\n  color: red\n",
  },
  {
    name: 'output.css',
    data: '* {\n  color: red;\n}\n',
  },
]
