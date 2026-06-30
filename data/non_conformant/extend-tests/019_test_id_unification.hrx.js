// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/019_test_id_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a .foo#baz {a: b}\n#baz {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a #baz {\n  a: b;\n}\n',
  },
]
