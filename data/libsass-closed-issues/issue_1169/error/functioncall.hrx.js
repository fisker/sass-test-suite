// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1169/error/functioncall.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n\n@function fncall($void) {\n  @return "key";\n}\n\n$map: (\n  fncall(1+2): \'foo\',\n  fncall(1+2): \'bar\',\n);\n\n.foo {\n  content: meta.inspect($map);\n}',
  },
  {
    name: 'error',
    data: "Error: Duplicate key.\n  ,\n8 |   fncall(1+2): 'foo',\n  |   =========== first key\n9 |   fncall(1+2): 'bar',\n  |   ^^^^^^^^^^^ second key\n  '\n  input.scss 9:3  root stylesheet\n",
  },
]
