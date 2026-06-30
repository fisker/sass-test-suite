// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_152.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 10;\n$bar: 10%;\n\nfoo {\n  a: #{10}% 100%;\n  a: #{10} % 100%;\n  a: #{10} %100%;\n  a: 10% 100%;\n  a: 10 % 100%;\n  a: 10 %100%;\n  a: $foo 100%;\n  a: $foo % 100%;\n  a: $foo %100%;\n  a: $bar 100%;\n  a: $bar % 100%;\n  a: $bar %100%;\n}\n',
  },
  {
    name: 'error',
    data: 'Error: Undefined operation "10 % 100%".\n  ,\n5 |   a: #{10}% 100%;\n  |      ^^^^^^^^^^^\n  \'\n  input.scss 5:6  root stylesheet\n',
  },
]
