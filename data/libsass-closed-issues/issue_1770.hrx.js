// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1770.hrx

export default [
  {
    name: 'input.scss',
    data: '@function returns-string() {\n  @return "selector";\n}\n\n#{"selector"} {\n  color: red;\n}\n\n#{returns-string()} {\n  color: red;\n}\n\n#{"selector"} selector2 {\n  color: red;\n}\n\n#{returns-string()} selector2 {\n  color: red;\n}',
  },
  {
    name: 'output.css',
    data: 'selector {\n  color: red;\n}\n\nselector {\n  color: red;\n}\n\nselector selector2 {\n  color: red;\n}\n\nselector selector2 {\n  color: red;\n}\n',
  },
]
