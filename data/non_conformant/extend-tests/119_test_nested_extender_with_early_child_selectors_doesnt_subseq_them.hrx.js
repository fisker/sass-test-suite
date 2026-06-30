// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/119_test_nested_extender_with_early_child_selectors_doesnt_subseq_them.hrx

export default [
  {
    name: 'input.scss',
    data: '.bap > .bip .foo {a: b}\n.bap > .grip .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.bap > .bip .foo, .bap > .bip .bap > .grip .bar, .bap > .grip .bap > .bip .bar {\n  a: b;\n}\n',
  },
]
