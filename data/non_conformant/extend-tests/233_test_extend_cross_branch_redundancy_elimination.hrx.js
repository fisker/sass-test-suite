// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/233_test_extend_cross_branch_redundancy_elimination.hrx

export default [
  {
    name: 'input.scss',
    data: '%x .c %y {a: b}\n.a, .b {@extend %x}\n.a .d {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: '.a .c .d, .b .c .a .d {\n  a: b;\n}\n',
  },
]
