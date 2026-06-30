// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_659/static.hrx

export default [
  {
    name: 'input.scss',
    data: '\n%bam { bam: null; }\n\n@mixin bar() {\n   bar: null;\n}\n\n@mixin baz() {\n   baz: null !important;\n}\n\nfoo {\n  foo: null;\n}\n\nbar {\n  @include bar;\n}\n\nbaz {\n  @include baz;\n}\n\nbam {\n  @extend %bam;\n}\n',
  },
  {
    name: 'output.css',
    data: 'baz {\n  baz: !important;\n}\n',
  },
]
