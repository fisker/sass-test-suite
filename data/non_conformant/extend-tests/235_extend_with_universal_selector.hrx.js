// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/235_extend_with_universal_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a *.foo1 {a: b}\na {@extend .foo1}\n-a {@extend %-a}\n\n%-b *|*.foo2 {b: b}\nb {@extend .foo2}\n-b {@extend %-b}\n',
  },
  {
    name: 'output.css',
    data: '-a *.foo1, -a a {\n  a: b;\n}\n\n-b *|*.foo2, -b b {\n  b: b;\n}\n',
  },
]
