// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/108_test_nested_extender_finds_common_selectors_around_child_selector.hrx

export default [
  {
    name: 'input.scss',
    data: 'a > b c .c1 {a: b}\nb c .c2 {@extend .c1}\n',
  },
  {
    name: 'output.css',
    data: 'a > b c .c1, a > b c .c2 {\n  a: b;\n}\n',
  },
]
