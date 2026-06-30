// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_property_comments.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  /* Foo\n   * Bar */\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  /* Foo\n   * Bar */\n  a: b;\n}\n',
  },
]
