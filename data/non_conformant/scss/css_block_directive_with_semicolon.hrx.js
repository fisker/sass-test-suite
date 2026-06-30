// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_block_directive_with_semicolon.hrx

export default [
  {
    name: 'input.scss',
    data: '@foo {\n  a: b; }\n\n@bar {\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: '@foo {\n  a: b;\n}\n@bar {\n  a: b;\n}\n',
  },
]
