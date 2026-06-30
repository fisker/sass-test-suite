// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1415/variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$parent: &;\n\n@if $parent {\n  foo {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '',
  },
]
