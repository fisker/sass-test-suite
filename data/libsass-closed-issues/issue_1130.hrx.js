// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1130.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo($args...) {\n  @return bar($args...);\n}\n\n@function bar() {\n @return "hi";\n}\n\n.foo {\n  result: foo();\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  result: "hi";\n}\n',
  },
]
