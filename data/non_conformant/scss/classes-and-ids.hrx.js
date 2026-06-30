export default [
  {
    name: 'input.scss',
    data: 'div.foo {\n  color: red;\n  #hux buz {\n    width: auto;\n  }\n  > .mux {\n    text-align: center;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'div.foo {\n  color: red;\n}\ndiv.foo #hux buz {\n  width: auto;\n}\ndiv.foo > .mux {\n  text-align: center;\n}\n',
  },
]
