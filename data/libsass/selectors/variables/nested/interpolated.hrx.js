// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/selectors/variables/nested/interpolated.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo a,\n.bar p {\n\n  .baz {\n    $bar: &;\n    content: #{$bar};\n  }\n\n}',
  },
  {
    name: 'output.css',
    data: '.foo a .baz,\n.bar p .baz {\n  content: .foo a .baz, .bar p .baz;\n}\n',
  },
]
