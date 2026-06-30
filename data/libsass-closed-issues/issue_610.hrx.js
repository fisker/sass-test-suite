export default [
  {
    name: 'input.scss',
    data: '@mixin vararg-test($a, $b, $c, $d) {\n  a: $a;\n  b: $b;\n  c: $c;\n  d: $d;\n}\n\nfoo {\n  @include vararg-test(a, b, c, d);\n}\n\nfoo {\n  @include vararg-test(a b c d...);\n}\n\nfoo {\n  @include vararg-test((a b c d)...);\n}\n\nfoo {\n  @include vararg-test((a, b, c, d)...);\n}\n\nfoo {\n  @include vararg-test((a: a, b: b, c: c, d: d)...);\n}\n\nfoo {\n  @include vararg-test(("a": a, "b": b, "c": c, "d": d)...);\n}\n\nfoo {\n  @include vararg-test(a b..., (c: c, d: d)...);\n}\n\nfoo {\n  @include vararg-test(a, b c..., (d: d)...);\n}\n\nfoo {\n  @include vararg-test($c: c, (a: a, b: b, d: d)...);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n\nfoo {\n  a: a;\n  b: b;\n  c: c;\n  d: d;\n}\n',
  },
]
