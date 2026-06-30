// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/40_pseudo_class_identifier_starting_with_n.hrx

export default [
  {
    name: 'input.scss',
    data: 'div:lang(nb) {\n  color: blue;\n}',
  },
  {
    name: 'output.css',
    data: 'div:lang(nb) {\n  color: blue;\n}\n',
  },
]
