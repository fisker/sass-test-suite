// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/36_extra_commas_in_selectors.hrx

export default [
  {
    name: 'input.scss',
    data: 'div,, , span, ,, {\n  color: red;\n}',
  },
  {
    name: 'output.css',
    data: 'div, span {\n  color: red;\n}\n',
  },
]
