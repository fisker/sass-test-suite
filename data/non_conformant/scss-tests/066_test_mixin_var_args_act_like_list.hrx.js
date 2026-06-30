export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@mixin foo($a, $b...) {\n  a: list.length($b);\n  b: list.nth($b, 2);\n}\n\n.foo {@include foo(1, 2, 3, 4)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 3;\n  b: 3;\n}\n',
  },
]
