export default [
  {
    name: 'input.scss',
    data: '.baz.foo {a: b}\nfoo > bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz.foo, foo > bar.baz {\n  a: b;\n}\n',
  },
]
