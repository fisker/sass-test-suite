// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/188_test_unused_placeholder_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {color: blue}\n%bar {color: red}\n.baz {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz {\n  color: blue;\n}\n',
  },
]
