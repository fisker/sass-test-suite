// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_660.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: true;\n\ndiv {\n  blah: $foo;\n}\n\ndiv {\n  blah: not $foo;\n}\n\ndiv {\n  blah: not ($foo);\n}\n\ndiv {\n  blah: not (true);\n}\n\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: true;\n}\n\ndiv {\n  blah: false;\n}\n\ndiv {\n  blah: false;\n}\n\ndiv {\n  blah: false;\n}\n',
  },
]
