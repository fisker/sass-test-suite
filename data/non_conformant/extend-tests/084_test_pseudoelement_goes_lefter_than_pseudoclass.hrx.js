// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/084_test_pseudoelement_goes_lefter_than_pseudoclass.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo:bar {a: b}\n.baz::bang {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo:bar, .baz:bar::bang {\n  a: b;\n}\n',
  },
]
