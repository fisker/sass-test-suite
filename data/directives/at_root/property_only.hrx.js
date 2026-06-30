// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/at_root/property_only.hrx

export default [
  {
    name: 'input.scss',
    data: '@media print {\n  a {\n    @at-root (without: media) {\n      b: c;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
