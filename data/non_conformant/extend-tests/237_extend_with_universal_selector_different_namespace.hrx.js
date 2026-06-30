// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/237_extend_with_universal_selector_different_namespace.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a ns|*.foo {a: b}\na {@extend .foo}\n-a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|*.foo {\n  a: b;\n}\n',
  },
]
