// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/193_test_media_in_placeholder_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {bar {@media screen {a {b: c}}}}\n.baz {c: d}\n',
  },
  {
    name: 'output.css',
    data: '.baz {\n  c: d;\n}\n',
  },
]
