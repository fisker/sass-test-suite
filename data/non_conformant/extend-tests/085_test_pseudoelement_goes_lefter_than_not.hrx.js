// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/085_test_pseudoelement_goes_lefter_than_not.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo::bar {a: b}\n.baz:not(.bang) {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo::bar, .baz:not(.bang)::bar {\n  a: b;\n}\n',
  },
]
