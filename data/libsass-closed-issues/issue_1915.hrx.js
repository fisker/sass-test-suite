// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1915.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin wrapper() {\n  .wrapped {\n    @content;\n  }\n}\n\n%ext {\n  background: #000;\n}\n\n@include wrapper() {\n  @extend %ext;\n}',
  },
  {
    name: 'output.css',
    data: '.wrapped {\n  background: #000;\n}\n',
  },
]
