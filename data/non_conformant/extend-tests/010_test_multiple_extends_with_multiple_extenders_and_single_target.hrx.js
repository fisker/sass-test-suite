// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/010_test_multiple_extends_with_multiple_extenders_and_single_target.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\n.baz {@extend .foo}\n.bang {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, .foo.bang, .bar.baz, .baz.bang {\n  a: b;\n}\n',
  },
]
