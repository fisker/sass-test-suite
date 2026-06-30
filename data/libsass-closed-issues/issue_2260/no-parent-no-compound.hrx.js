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
