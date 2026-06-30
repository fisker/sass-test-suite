// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/136_test_at_root_with_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root .bar {a: b}\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
