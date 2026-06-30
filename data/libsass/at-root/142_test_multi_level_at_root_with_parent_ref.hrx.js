// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/142_test_multi_level_at_root_with_parent_ref.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root & {\n    .bar {\n      @at-root & {\n        a: b;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar {\n  a: b;\n}\n',
  },
]
