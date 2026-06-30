// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/118_test_nested_extender_with_early_child_selectors_doesnt_subseq_them.hrx

export default [
  {
    name: 'input.scss',
    data: '.bip > .bap .foo {a: b}\n.grip > .bap .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.bip > .bap .foo, .bip > .bap .grip > .bap .bar, .grip > .bap .bip > .bap .bar {\n  a: b;\n}\n',
  },
]
