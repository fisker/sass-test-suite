// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/095_test_long_extender.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\n.baz.bang {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, .bar.baz.bang {\n  a: b;\n}\n',
  },
]
