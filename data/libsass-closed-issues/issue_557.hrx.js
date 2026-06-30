// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_557.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n\na {\n  foo: map.get((foo: 1, bar: 2), "bar");\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  foo: 2;\n}\n',
  },
]
