// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/189_test_placeholder_descendant_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '#context %foo a {a: b}\n.bar {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '#context .bar a {\n  a: b;\n}\n',
  },
]
