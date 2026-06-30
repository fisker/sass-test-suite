// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/236_extend_with_universal_selector_empty_namespace.hrx

export default [
  {
    name: 'input.scss',
    data: '%-a |*.foo {a: b}\na {@extend .foo}\n-a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a |*.foo {\n  a: b;\n}\n',
  },
]
