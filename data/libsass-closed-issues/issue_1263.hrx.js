// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1263.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @ap#{pl}y;\n  @apply(--bar);\n  @apply  (  --bar  );\n  @ap#{pl}y   (   --bar , --foo  )  ;\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  @apply;\n  @apply (--bar);\n  @apply ( --bar );\n  @apply ( --bar , --foo );\n}\n',
  },
]
