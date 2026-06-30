// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_813.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo($one, $two) {\n  @return $one + $two;\n}\n\n$nums: 1px 2px;\n\n.foo {\n  left: foo($nums...);\n  bottom: $nums 3px;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  left: 3px;\n  bottom: 1px 2px 3px;\n}\n',
  },
]
