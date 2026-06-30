// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1187.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:meta\";\n\n$a: 'foo';\n$b: 'foo';\n$map: (\n  $a: 1,\n  $b: 2\n);\n\n.foo {\n  content: $a == $b;\n  content: meta.inspect($map);\n}",
  },
  {
    name: 'error',
    data: "Error: Duplicate key.\n  ,\n6 |   $a: 1,\n  |   == first key\n7 |   $b: 2\n  |   ^^ second key\n  '\n  input.scss 7:3  root stylesheet\n",
  },
]
