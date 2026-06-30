// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1839.hrx

export default [
  {
    name: 'input.scss',
    data: '@custom-media --large-viewport (min-width: 1001px);',
  },
  {
    name: 'output.css',
    data: '@custom-media --large-viewport (min-width: 1001px);\n',
  },
]
