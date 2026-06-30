// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/091_test_redundant_selector_elimination.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\n.x {@extend .foo, .bar}\n.y {@extend .foo, .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, .y, .x {\n  a: b;\n}\n',
  },
]
