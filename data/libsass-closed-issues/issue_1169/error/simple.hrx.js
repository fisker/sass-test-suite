// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1169/error/simple.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:meta\";\n\n$map: (\n  red: 'bar',\n  #{red}: 'baz',\n);\n\n.foo {\n  content: meta.inspect($map);\n}",
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: (red: "bar", red: "baz");\n}\n',
  },
]
