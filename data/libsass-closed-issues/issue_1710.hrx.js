// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1710.hrx

export default [
  {
    name: 'input.scss',
    data: 'ul, ol {\n    & & {\n      display: block;\n    }\n  }\n',
  },
  {
    name: 'output.css',
    data: 'ul ul, ul ol, ol ul, ol ol {\n  display: block;\n}\n',
  },
]
