// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/104_test_nested_extender_counts_extended_subselectors/104_test_nested_extender_counts_extended_subselectors.hrx

export default [
  {
    name: 'input.scss',
    data: '.a .bip.bop .foo {a: b}\n.b .bip .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.a .bip.bop .foo, .a .b .bip.bop .bar, .b .a .bip.bop .bar {\n  a: b;\n}\n',
  },
]
