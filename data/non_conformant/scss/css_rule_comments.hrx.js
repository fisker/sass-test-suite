// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_rule_comments.hrx

export default [
  {
    name: 'input.scss',
    data: '/* Foo\n * Bar */\n.foo {\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: '/* Foo\n * Bar */\n.foo {\n  a: b;\n}\n',
  },
]
