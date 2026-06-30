// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2260/no-parent-no-compound.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin test() {\r\n  @at-root {\r\n    @content;\r\n  }\r\n}\r\n\r\n@include test {\r\n  .test {\r\n    property: value;\r\n   }\r\n }',
  },
  {
    name: 'output.css',
    data: '.test {\n  property: value;\n}\n',
  },
]
