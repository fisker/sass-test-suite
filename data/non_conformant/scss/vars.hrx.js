// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/vars.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: hello;\n$y: 1/2 3/4 (2+3);\n\ndiv {\n  content: 1 2 $x;\n  content: $y;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: 1 2 hello;\n  content: 1/2 3/4 5;\n}\n',
  },
]
