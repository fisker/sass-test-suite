// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1568.hrx

export default [
  {
    name: 'input.scss',
    data: 'body {\n    font-weight: bold; // test\n    font-size: 10px // test\n}\n',
  },
  {
    name: 'output.css',
    data: 'body {\n  font-weight: bold;\n  font-size: 10px;\n}\n',
  },
]
