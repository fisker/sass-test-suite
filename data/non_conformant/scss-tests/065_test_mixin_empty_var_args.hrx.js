export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@mixin foo($a, $b...) {\n  a: $a;\n  b: list.length($b);\n}\n\n.foo {@include foo(1)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 1;\n  b: 0;\n}\n',
  },
]
