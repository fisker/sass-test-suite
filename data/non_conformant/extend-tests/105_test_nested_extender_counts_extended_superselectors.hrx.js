// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/105_test_nested_extender_counts_extended_superselectors.hrx

export default [
  {
    name: 'input.scss',
    data: '.a .bip .foo {a: b}\n.b .bip.bop .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.a .bip .foo, .a .b .bip.bop .bar, .b .a .bip.bop .bar {\n  a: b;\n}\n',
  },
]
