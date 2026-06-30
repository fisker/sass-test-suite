export default [
  {
    name: 'input.scss',
    data: '%a {\n  x:y;\n}\nb:after:not(:first-child) {\n  @extend %a;\n}\nc:s {\n  @extend %a;  \n}\nd::e {\n  @extend c;\n}',
  },
  {
    name: 'output.css',
    data: 'c:s, d:s::e, b:after:not(:first-child) {\n  x: y;\n}\n',
  },
]
