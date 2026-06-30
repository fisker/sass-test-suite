// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/206_test_extend_succeeds_when_one_extension_fails_but_others_dont.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.bar {a: b}\n.bar {c: d}\nb.foo {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: 'a.bar {\n  a: b;\n}\n\n.bar, b.foo {\n  c: d;\n}\n',
  },
]
