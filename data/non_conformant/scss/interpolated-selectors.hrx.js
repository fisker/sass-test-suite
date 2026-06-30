// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/interpolated-selectors.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo#{bar} hux {\n  color: red;\n}',
  },
  {
    name: 'output.css',
    data: 'foobar hux {\n  color: red;\n}\n',
  },
]
