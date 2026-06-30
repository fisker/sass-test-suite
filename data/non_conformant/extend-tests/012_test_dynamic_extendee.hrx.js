// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/012_test_dynamic_extendee.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {@extend #{".foo"}}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n',
  },
]
