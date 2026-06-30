// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/important.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  color: red ! important;\n  width: 5px ! important;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  color: red !important;\n  width: 5px !important;\n}\n',
  },
]
