// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2333.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n\ntest { test: meta.inspect((a:1,b:(foo,bar),c:3)); }',
  },
  {
    name: 'output.css',
    data: 'test {\n  test: (a: 1, b: (foo, bar), c: 3);\n}\n',
  },
]
