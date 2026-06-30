// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_empty_declarations.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: baz; }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n}\n',
  },
]
