// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/178_test_star_plus_and_parent.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {*+html & {a: b}}\n',
  },
  {
    name: 'output.css',
    data: '* + html foo {\n  a: b;\n}\n',
  },
]
