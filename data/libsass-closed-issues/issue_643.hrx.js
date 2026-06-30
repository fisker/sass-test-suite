// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_643.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$map: (foo: bar, bar: baz);\n\nfoo {\n  a: list.nth($map, 2);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: bar baz;\n}\n',
  },
]
