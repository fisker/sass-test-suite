// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/08_selector_combinators.hrx

export default [
  {
    name: 'input.scss',
    data: 'a   +   b  >  c {\n  d e {\n    color: blue;\n    background: white;\n  }\n  color: red;\n  background: gray;\n}',
  },
  {
    name: 'output.css',
    data: 'a + b > c d e {\n  color: blue;\n  background: white;\n}\na + b > c {\n  color: red;\n  background: gray;\n}\n',
  },
]
