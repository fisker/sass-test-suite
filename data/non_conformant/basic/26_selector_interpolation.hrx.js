export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$x: oo, ba;\n$y: az, hu;\n\nf#{$x}r {\n  p: 1;\n  b#{$y}x {\n    q: 2;\n    mumble#{list.length($x) + list.length($y)} {\n      r: 3;\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'foo, bar {\n  p: 1;\n}\nfoo baz, foo hux, bar baz, bar hux {\n  q: 2;\n}\nfoo baz mumble4, foo hux mumble4, bar baz mumble4, bar hux mumble4 {\n  r: 3;\n}\n',
  },
]
