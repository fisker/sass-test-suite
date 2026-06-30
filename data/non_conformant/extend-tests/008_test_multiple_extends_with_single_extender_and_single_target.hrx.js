// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/008_test_multiple_extends_with_single_extender_and_single_target.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\n.baz {@extend .foo; @extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, .baz {\n  a: b;\n}\n',
  },
]
