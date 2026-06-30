// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/005_test_multiple_targets.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {@extend .foo}\n.blip .foo {c: d}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n\n.blip .foo, .blip .bar {\n  c: d;\n}\n',
  },
]
