export default [
  {
    name: 'input.scss',
    data: '@function aFunction() {\r\n    @return 1em;\r\n}\r\n\r\n@media (max-width: 1em) {\r\n    %placeholder {\r\n        color: red;\r\n    }\r\n}\r\n\r\n@media (max-width: aFunction()) {\r\n    .test {\r\n        @extend %placeholder;\r\n    }\r\n}',
  },
  {
    name: 'output.css',
    data: '@media (max-width: 1em) {\n  .test {\n    color: red;\n  }\n}\n',
  },
]
