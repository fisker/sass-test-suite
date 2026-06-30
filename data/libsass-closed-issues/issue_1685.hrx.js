// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1685.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo($x, $y...) { @return null }\n\na {\n  b: foo(1 2 3...);\n}',
  },
  {
    name: 'output.css',
    data: '',
  },
]
