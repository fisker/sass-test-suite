// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2260/no-parent-with-compound.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin test() {\n  @at-root {\n    @content;\n  }\n}\n\n@include test {\n  .test & {\n    property: value;\n   }\n}\n',
  },
  {
    name: 'output.css',
    data: '.test & {\n  property: value;\n}\n',
  },
]
