// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/179_test_extend_self_loop.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b; @extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
