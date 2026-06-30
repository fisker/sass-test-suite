// https://github.com/sass/sass-spec/blob/HEAD/spec/variables/semi_global.hrx

export default [
  {
    name: 'in_local/double_nested/input.scss',
    data: '// Regression test for sass/dart-sass#1250\n$a: global;\nb {\n  @if true {\n    @if true {\n      $a: local;\n    }\n  }\n}\n\nc {d: $a}\n',
  },
  {
    name: 'in_local/double_nested/output.css',
    data: 'c {\n  d: global;\n}\n',
  },
]
