// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/interpolated-function-call.hrx

export default [
  {
    name: 'input.scss',
    data: '$f: foo;\n\ndiv {\n  color: #{$f}(a, 1+2, c);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  color: foo(a, 3, c);\n}\n',
  },
]
