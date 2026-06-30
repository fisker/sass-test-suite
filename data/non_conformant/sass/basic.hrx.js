// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass/basic.hrx

export default [
  {
    name: 'input.sass',
    data: 'div\n\ta\n\t\tcolor: red\n\tli\n\t\tcolor: green',
  },
  {
    name: 'output.css',
    data: 'div a {\n  color: red;\n}\ndiv li {\n  color: green;\n}\n',
  },
]
