// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/192_test_placeholder_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: foo;\n\n%#{$foo} {color: blue}\n.bar {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  color: blue;\n}\n',
  },
]
