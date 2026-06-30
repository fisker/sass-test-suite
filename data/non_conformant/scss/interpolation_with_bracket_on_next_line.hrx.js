// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/interpolation_with_bracket_on_next_line.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.#{"foo"} b\n{color: red}\n',
  },
  {
    name: 'output.css',
    data: 'a.foo b {\n  color: red;\n}\n',
  },
]
