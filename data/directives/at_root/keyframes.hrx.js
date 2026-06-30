// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/at_root/keyframes.hrx

export default [
  {
    name: 'all/input.scss',
    data: '@keyframes a {\n  @at-root (without: all) {\n    b {c: d}\n  }\n}\n',
  },
  {
    name: 'all/output.css',
    data: '@keyframes a {}\nb {\n  c: d;\n}\n',
  },
]
