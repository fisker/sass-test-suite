export default [
  {
    name: 'input.scss',
    data: '@mixin apply-to-ie6-only {\r\n  * html {\r\n    @content;\r\n  }\r\n}\r\n@include apply-to-ie6-only {\r\n  #logo {\r\n    background-image: url(/logo.gif);\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: '* html #logo {\n  background-image: url(/logo.gif);\n}\n',
  },
]
