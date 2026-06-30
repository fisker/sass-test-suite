// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/141_test_at_root_with_parent_ref.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root & {\n    a: b;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
