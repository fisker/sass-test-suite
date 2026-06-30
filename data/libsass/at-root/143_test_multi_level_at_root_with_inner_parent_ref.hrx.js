// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/143_test_multi_level_at_root_with_inner_parent_ref.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root .bar {\n    @at-root & {\n      a: b;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
