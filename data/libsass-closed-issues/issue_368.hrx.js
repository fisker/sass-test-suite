// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_368.hrx

export default [
  {
    name: 'input.scss',
    data: '@if true {\n  div {\n    background: green;\n  }\n}\n@if not true {\n  div {\n    background: red;\n  }\n}\n@if not not true {\n  div {\n    background: blue;\n  }\n}\n@if not (true or false) {\n  div {\n    background: black;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  background: green;\n}\n\ndiv {\n  background: blue;\n}\n',
  },
]
