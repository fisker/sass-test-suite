// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/basic/44_not_number_expression.hrx

export default [
  {
    name: 'input.scss',
    data: '@if 2 {\n  div {\n    background: green;\n  }\n}\n@if not 2 {\n  div {\n    background: red;\n  }\n}\n@if not not 2 {\n  div {\n    background: blue;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  background: green;\n}\n\ndiv {\n  background: blue;\n}\n',
  },
]
