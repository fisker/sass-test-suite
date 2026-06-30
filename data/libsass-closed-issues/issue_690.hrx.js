// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_690.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\n  left: expression(callSomeFunc());\n  content: expression("Smile :-)");\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  left: expression(callSomeFunc());\n  content: expression("Smile :-)");\n}\n',
  },
]
