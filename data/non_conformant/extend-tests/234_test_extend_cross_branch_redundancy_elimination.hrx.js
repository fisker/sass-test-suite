// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/234_test_extend_cross_branch_redundancy_elimination.hrx

export default [
  {
    name: 'input.scss',
    data: '.e %z {a: b}\n%x .c %y {@extend %z}\n.a, .b {@extend %x}\n.a .d {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: '.e .a .c .d, .e .b .c .a .d, .a .e .b .c .d, .a .c .e .d, .b .c .e .a .d {\n  a: b;\n}\n',
  },
]
