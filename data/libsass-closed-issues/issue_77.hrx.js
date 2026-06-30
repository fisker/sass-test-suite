export default [
  {
    name: 'input.scss',
    data: '@mixin m {\r\n  .m {\r\n    color: red;\r\n    @content;\r\n  }\r\n}\r\ndiv.a {\r\n  @include m;\r\n}',
  },
  {
    name: 'output.css',
    data: 'div.a .m {\n  color: red;\n}\n',
  },
]
