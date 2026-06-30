// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scope/each.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 42;\n\n.foo {\n  content: $foo;\n}\n\n@each $item in 1337 {\n  $foo: $item !global;\n}\n\n.bar {\n  content: $foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: 42;\n}\n\n.bar {\n  content: 1337;\n}\n',
  },
]
