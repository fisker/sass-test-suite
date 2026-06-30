// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scope/ruleset.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 42;\n\n.foo {\n  content: $foo;\n  $foo: 1337 !global;\n  content: $foo;\n}\n\n.bar {\n  content: $foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: 42;\n  content: 1337;\n}\n\n.bar {\n  content: 1337;\n}\n',
  },
]
