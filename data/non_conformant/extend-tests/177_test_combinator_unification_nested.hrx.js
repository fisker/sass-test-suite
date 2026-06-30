// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/177_test_combinator_unification_nested.hrx

export default [
  {
    name: 'input.scss',
    data: '.a > .b + x {a: b}\n.c > y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a > .b + x, .a.c > .b + y {\n  a: b;\n}\n',
  },
]
