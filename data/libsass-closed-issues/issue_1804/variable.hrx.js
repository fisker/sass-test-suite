// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1804/variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 2px;\n$bar: 5in;\n\nfoo {\n  bar: #{($foo*$bar)};\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: calc(10px * 1in);\n}\n',
  },
]
