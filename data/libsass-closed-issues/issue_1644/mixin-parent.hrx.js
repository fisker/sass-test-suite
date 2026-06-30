// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1644/mixin-parent.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin parent {\n  @content;\n}\n\n@include parent() {\n  body.immobile & {\n    margin-bottom: 0;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'body.immobile & {\n  margin-bottom: 0;\n}\n',
  },
]
