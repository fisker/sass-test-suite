export default [
  {
    name: 'input.scss',
    data: '%not {\n  color: red;\n}\n.not {\n  @extend %not;\n}\ndiv:has(%not) {\n  color: black;\n}\n\nbar {\n  span:not(%not) {\n    color: black;\n  }\n  span:not(&.foo) {\n    color: black;\n  }\n  span:not(&%not) {\n    color: black;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '.not {\n  color: red;\n}\n\ndiv:has(.not) {\n  color: black;\n}\n\nbar span:not(.not) {\n  color: black;\n}\nspan:not(bar.foo) {\n  color: black;\n}\nspan:not(bar.not) {\n  color: black;\n}\n',
  },
]
