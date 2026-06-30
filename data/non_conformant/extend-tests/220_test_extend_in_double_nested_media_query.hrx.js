// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/220_test_extend_in_double_nested_media_query.hrx

export default [
  {
    name: 'input.scss',
    data: '@media all {\n@media (orientation: landscape) {\n  %foo {color: blue}\n  .bar {@extend %foo}\n}\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (orientation: landscape) {\n  .bar {\n    color: blue;\n  }\n}\n',
  },
]
