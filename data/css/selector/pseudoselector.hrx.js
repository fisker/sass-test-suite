export default [
  {
    name: 'nested/adjacent_combinators/input.scss',
    data: '// Regression test for sass/dart-sass#1038\na {\n  b:c, > d {x: y}\n}\n',
  },
  {
    name: 'nested/adjacent_combinators/output.css',
    data: 'a b:c, a > d {\n  x: y;\n}\n',
  },
  {
    name: 'whitespace/sass/before_param/input.sass',
    data: 'a:b(\n  c)\n  d: e\n',
  },
  {
    name: 'whitespace/sass/before_param/output.css',
    data: 'a:b(c) {\n  d: e;\n}\n',
  },
  {
    name: 'whitespace/sass/after_param/input.sass',
    data: 'a:b(c\n  )\n  d: e\n',
  },
  {
    name: 'whitespace/sass/after_param/output.css',
    data: 'a:b(c) {\n  d: e;\n}\n',
  },
  {
    name: 'with_attribute/sass/input.sass',
    data: 'a:b([c])\n  d: e\n',
  },
  {
    name: 'with_attribute/sass/output.css',
    data: 'a:b([c]) {\n  d: e;\n}\n',
  },
  {
    name: 'error/with_attribute_mismatched/sass/input.scss',
    data: 'a:b([c)]{\n  d: e;\n}\n',
  },
  {
    name: 'error/with_attribute_mismatched/sass/error',
    data: 'Error: expected "]".\n  ,\n1 | a:b([c)]{\n  |       ^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
]
