// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_579.hrx

export default [
  {
    name: 'input.scss',
    data: '$map: (\n  foo: fump,\n  bar: bump,\n);\n\n@mixin vararg-test($foo, $bar) {\n  foo: $foo;\n  bar: $bar;\n}\n\n.test {\n  @include vararg-test($map...);\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  foo: fump;\n  bar: bump;\n}\n',
  },
]
