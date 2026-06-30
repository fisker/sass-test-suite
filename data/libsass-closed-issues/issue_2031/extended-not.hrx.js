// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2031/extended-not.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\n:not(.foo) {\r\n  content: test;\r\n}\r\n.bar, .baz {\r\n  @extend .foo;\r\n}\r\n\r\ntest {\r\n  content: selector.extend(":not(.foo)", ".foo", ".bar");\r\n}',
  },
  {
    name: 'output.css',
    data: ':not(.foo):not(.bar):not(.baz) {\n  content: test;\n}\n\ntest {\n  content: :not(.foo):not(.bar);\n}\n',
  },
]
