export default [
  {
    name: 'input.sass',
    data: '=mixme\r\n  color: blue\r\n\r\ninput\r\n  +mixme\r\n  background: red\r\n\r\n=apply-to-ie6-only\r\n  * html\r\n    @content\r\n\r\n+apply-to-ie6-only\r\n  #logo\r\n    background-image: url(/logo.gif)\r\n\r\n@mixin inc()\r\n  mix: in\r\n\r\n.a\r\n  +\r\n    .c, .b\r\n      margin: 10px\r\n      +inc\r\n\r\n.a\r\n  +inc\r\n  + b\r\n    .c, .b\r\n      margin: 10px\r\n\r\n\r\n.a\r\n  >\r\n    .c, .b\r\n      margin: 10px\r\n',
  },
  {
    name: 'output.css',
    data: 'input {\n  color: blue;\n  background: red;\n}\n\n* html #logo {\n  background-image: url(/logo.gif);\n}\n\n.a + .c, .a + .b {\n  margin: 10px;\n  mix: in;\n}\n\n.a {\n  mix: in;\n}\n.a + b .c, .a + b .b {\n  margin: 10px;\n}\n\n.a > .c, .a > .b {\n  margin: 10px;\n}\n',
  },
]
