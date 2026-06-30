// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1243/include.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {\n  a { b: c; }\n}\n@include foo\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
