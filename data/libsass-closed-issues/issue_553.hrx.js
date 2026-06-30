// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_553.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo\\bar: 1;\n\n@function foo\\func() { @return 1; }\n@mixin foo\\mixin() { mixin-value: 1; }\n\n.test {\n    var-value: $foo\\bar;\n    func-value: foo\\func();\n    @include foo\\mixin();\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  var-value: 1;\n  func-value: 1;\n  mixin-value: 1;\n}\n',
  },
]
