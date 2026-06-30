export default [
  {
    name: 'input.scss',
    data: 'div {\n  prop: {\n    a: "hello";\n    b: "goodbye";\n    @if true {\n      c: "badbye";\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  prop-a: "hello";\n  prop-b: "goodbye";\n  prop-c: "badbye";\n}\n',
  },
]
