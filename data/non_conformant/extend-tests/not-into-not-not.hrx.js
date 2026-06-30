export default [
  {
    name: 'input.scss',
    data: '// Regression test for dart-sass#191.\n:not(:not(.x)) {a: b}\n:not(.y) {@extend .x}\n',
  },
  {
    name: 'output.css',
    data: ':not(:not(.x)) {\n  a: b;\n}\n',
  },
]
