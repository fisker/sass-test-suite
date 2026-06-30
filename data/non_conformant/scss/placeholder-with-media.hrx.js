export default [
  {
    name: 'input.scss',
    data: '%a {\n  @media only screen and (max-width: 100px) {\n    color: red;\n  }\n}\n\nb {\n  @extend %a;\n}\n',
  },
  {
    name: 'output.css',
    data: '@media only screen and (max-width: 100px) {\n  b {\n    color: red;\n  }\n}\n',
  },
]
