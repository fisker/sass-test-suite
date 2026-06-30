// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_659/sass-script.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: null;\n\n@mixin bar() {\n   bar: $foo;\n}\n\n@mixin baz() {\n   baz: $foo !important;\n}\n\nfoo {\n  baz: $foo;\n}\n\nbar {\n  @include bar;\n}\n\nbaz {\n  @include baz;\n}\n',
  },
  {
    name: 'output.css',
    data: 'baz {\n  baz: !important;\n}\n',
  },
]
