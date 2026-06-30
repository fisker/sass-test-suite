// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/selector-functions/simple-selector.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\nfoo {\r\n  test-01: selector.simple-selectors(".foo.bar");\r\n  test-02: selector.simple-selectors(".foo.bar.baz");\r\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  test-01: .foo, .bar;\n  test-02: .foo, .bar, .baz;\n}\n',
  },
]
