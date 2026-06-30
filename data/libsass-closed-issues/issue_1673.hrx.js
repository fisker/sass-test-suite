export default [
  {
    name: 'input.scss',
    data: '%foo {\n  test: outer;\n\n  &-inner {\n    test: inner;\n  }\n}\n\n.foo {\n  @extend %foo;\n\n  &.inner { @extend %foo-inner; }\n}',
  },
  {
    name: 'output.css',
    data: '.foo {\n  test: outer;\n}\n.foo.inner {\n  test: inner;\n}\n',
  },
]
