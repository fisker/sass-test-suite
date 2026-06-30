// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/102_test_nested_extender_unifies_common_subseq.hrx

export default [
  {
    name: 'input.scss',
    data: '.a .x .b .y .foo {a: b}\n.a .n .b .m bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.a .x .b .y .foo, .a .x .n .b .y .m bar, .a .n .x .b .y .m bar, .a .x .n .b .m .y bar, .a .n .x .b .m .y bar {\n  a: b;\n}\n',
  },
]
