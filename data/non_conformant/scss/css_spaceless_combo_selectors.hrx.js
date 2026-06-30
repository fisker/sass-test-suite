// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_spaceless_combo_selectors.hrx

export default [
  {
    name: 'input.scss',
    data: 'E + F {\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: 'E + F {\n  a: b;\n}\n',
  },
]
