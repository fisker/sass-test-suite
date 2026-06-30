// https://github.com/sass/sass-spec/blob/HEAD/spec/variables/semicolon.hrx

export default [
  {
    name: 'sass/input.sass',
    data: '$a: b;\nc\n  d: $a\n',
  },
  {
    name: 'sass/output.css',
    data: 'c {\n  d: b;\n}\n',
  },
]
