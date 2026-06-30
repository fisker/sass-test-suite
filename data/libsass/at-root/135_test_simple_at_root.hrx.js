// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/135_test_simple_at_root.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root {\n    .bar {a: b}\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
