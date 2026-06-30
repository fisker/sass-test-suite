// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/006_test_multiple_extendees.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {c: d}\n.baz {@extend .foo; @extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .baz {\n  a: b;\n}\n\n.bar, .baz {\n  c: d;\n}\n',
  },
]
