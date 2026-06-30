// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1224.hrx

export default [
  {
    name: 'input.scss',
    data: '@media all and (max-width: 768px) {\n  @media only screen {\n    a { b: c; }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media only screen and (max-width: 768px) {\n  a {\n    b: c;\n  }\n}\n',
  },
]
