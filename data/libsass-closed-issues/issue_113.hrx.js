// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_113.hrx

export default [
  {
    name: 'input.scss',
    data: '// Input\nsection {\n    $w: null, 10px;\n    width: $w;\n}',
  },
  {
    name: 'output.css',
    data: 'section {\n  width: 10px;\n}\n',
  },
]
