// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/no_namespace_properties_without_space.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar:baz {\n    bip: bop }}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar:baz {\n  bip: bop;\n}\n',
  },
]
