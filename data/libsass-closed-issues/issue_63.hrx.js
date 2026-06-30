export default [
  {
    name: 'input.scss',
    data: '@mixin testComments {\r\n\t/* crash */\r\n\tp {\r\n\t\twidth: 100px;\r\n\t}\r\n}\r\n\r\n@media screen and (orientation:landscape) {\r\n\t@include testComments;\t\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '@media screen and (orientation: landscape) {\n  /* crash */\n  p {\n    width: 100px;\n  }\n}\n',
  },
]
