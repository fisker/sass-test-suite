// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_349.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  blah: not true;\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: false;\n}\n',
  },
]
