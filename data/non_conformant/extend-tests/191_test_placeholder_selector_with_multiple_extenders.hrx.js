// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/191_test_placeholder_selector_with_multiple_extenders.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {color: blue}\n.bar {@extend %foo}\n.baz {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz, .bar {\n  color: blue;\n}\n',
  },
]
