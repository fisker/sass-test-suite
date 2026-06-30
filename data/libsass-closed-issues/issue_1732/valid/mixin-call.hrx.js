// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1732/valid/mixin-call.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin bar() {\n  @content;\n}\n\nfoo {\n  @include bar {\n    color: blue;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: blue;\n}\n',
  },
]
