// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/backslash.hrx

export default [
  {
    name: 'input.scss',
    data: 'div, span {\n\tcolor: red;\n\t\\ foo {\n\t\tcolor: blue;\n\t}\n}',
  },
  {
    name: 'output.css',
    data: 'div, span {\n  color: red;\n}\ndiv \\ foo, span \\ foo {\n  color: blue;\n}\n',
  },
]
