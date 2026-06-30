// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/086_test_pseudoelement_goes_lefter_than_not.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo:not(.bang) {a: b}\n.baz::bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo:not(.bang), .baz:not(.bang)::bar {\n  a: b;\n}\n',
  },
]
