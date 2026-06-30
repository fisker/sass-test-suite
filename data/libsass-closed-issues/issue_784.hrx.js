export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @each $item in (a: 1, b: 2, c: 3) {\n    each: $item;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  each: a 1;\n  each: b 2;\n  each: c 3;\n}\n',
  },
]
