// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1169/simple.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:meta\";\n\n$map1: (\n   red: 'bar',\n  'red': 'foo',\n);\n\n$map2: (\n   red: 'bar',\n  'red': #{red},\n);\n\n.foo {\n  content: meta.inspect($map1);\n  content: meta.inspect($map2);\n}",
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: (red: "bar", "red": "foo");\n  content: (red: "bar", "red": red);\n}\n',
  },
]
