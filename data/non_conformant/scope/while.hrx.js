export default [
  {
    name: 'input.scss',
    data: '$foo: 42;\n\n.foo {\n  content: $foo;\n}\n\n$condition: 1337;\n@while $condition > 0 {\n  $foo: $condition !global;\n  $condition: 0;\n}\n\n.bar {\n  content: $foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: 42;\n}\n\n.bar {\n  content: 1337;\n}\n',
  },
]
