// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scope/for.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 42;\n\n.foo {\n  content: $foo;\n}\n\n@for $i from 1337 to 1338 {\n  $foo: $i !global;\n}\n\n.bar {\n  content: $foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: 42;\n}\n\n.bar {\n  content: 1337;\n}\n',
  },
]
