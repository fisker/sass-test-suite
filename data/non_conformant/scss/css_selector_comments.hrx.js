export default [
  {
    name: 'input.scss',
    data: '.foo #bar:baz(bip) {\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: '.foo #bar:baz(bip) {\n  a: b;\n}\n',
  },
]
