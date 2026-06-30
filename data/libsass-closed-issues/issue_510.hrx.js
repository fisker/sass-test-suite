export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n$before: map.remove((foo: 1, bar: 2, baz: 3, burp: 4), bar, baz);\n$after: (foo: 1, burp: 4);\n\ndiv {\n  foo: $before == $after;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: true;\n}\n',
  },
]
