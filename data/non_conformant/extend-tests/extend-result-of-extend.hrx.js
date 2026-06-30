// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/extend-result-of-extend.hrx

export default [
  {
    name: 'input.scss',
    data: '// The result of :not(.c) being extended should itself be extendable.\n.a {@extend :not(.b)}\n.b {@extend .c}\n:not(.c) {x: y}\n',
  },
  {
    name: 'output.css',
    data: ':not(.c):not(.b), .a:not(.c) {\n  x: y;\n}\n',
  },
]
