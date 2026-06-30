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
