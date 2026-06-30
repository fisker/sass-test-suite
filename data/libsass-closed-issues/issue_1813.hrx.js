// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1813.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo($value) {\n  $a: bar($value);\n  @return $value;\n}\n\n@function bar($list) {\n  @while (true) {\n    @return true;\n  }\n}\n\na {\n  b: foo(true);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
