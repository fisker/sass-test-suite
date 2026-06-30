// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/cfunc.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  blah: say-something();\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: say-something();\n}\n',
  },
]
