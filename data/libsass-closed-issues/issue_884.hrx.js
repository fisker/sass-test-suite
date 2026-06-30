// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_884.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n  @return 2;\n}\n\n$foo: false;\n@if foo() % 2 == 0 {\n  $foo: true;\n}\n\na {\n  foo: $foo;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  foo: true;\n}\n',
  },
]
