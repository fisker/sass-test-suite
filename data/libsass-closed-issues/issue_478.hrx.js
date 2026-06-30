// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_478.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: "x";\n$y: "y";\n#{$x}--#{$y} {\n  a: 1\n}\n',
  },
  {
    name: 'output.css',
    data: 'x--y {\n  a: 1;\n}\n',
  },
]
