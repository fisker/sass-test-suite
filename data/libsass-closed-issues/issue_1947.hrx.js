// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1947.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:string\";\n.a-#{string.quote('' + b)} {\n  c: d;\n}\n\n.a-#{'' + b} {\n  c: d;\n}",
  },
  {
    name: 'output.css',
    data: '.a-b {\n  c: d;\n}\n\n.a-b {\n  c: d;\n}\n',
  },
]
