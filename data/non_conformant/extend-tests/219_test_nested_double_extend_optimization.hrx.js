// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/219_test_nested_double_extend_optimization.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo %bar {\na: b;\n}\n\n.parent1 {\n@extend %foo;\n\n.child {\n  @extend %bar;\n}\n}\n\n.parent2 {\n@extend %foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.parent1 .child {\n  a: b;\n}\n',
  },
]
