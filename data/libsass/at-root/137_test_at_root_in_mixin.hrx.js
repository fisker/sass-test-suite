// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/137_test_at_root_in_mixin.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin bar {\n  @at-root .bar {a: b}\n}\n\n.foo {\n  @include bar;\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
