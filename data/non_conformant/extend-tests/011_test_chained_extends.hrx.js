// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/011_test_chained_extends.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {@extend .foo}\n.baz {@extend .bar}\n.bip {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar, .bip, .baz {\n  a: b;\n}\n',
  },
]
