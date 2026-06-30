// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/140_test_at_root_in_unknown_directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@fblthp {\n  .foo {\n    @at-root .bar {a: b}\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@fblthp {\n  .bar {\n    a: b;\n  }\n}\n',
  },
]
