// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/selectors/variables/single/interpolated.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  $bar: &;\n  content: #{$bar};\n}',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: .foo;\n}\n',
  },
]
