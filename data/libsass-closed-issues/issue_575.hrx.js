// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_575.hrx

export default [
  {
    name: 'input.scss',
    data: '.test {\n  @if (foo: bar) == (foo: bar) {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  foo: bar;\n}\n',
  },
]
