// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1206.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: #{0/0};\n  bar: #{0/1};\n  bar: #{1/2};\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: 0/0;\n  bar: 0/1;\n  bar: 1/2;\n}\n',
  },
]
