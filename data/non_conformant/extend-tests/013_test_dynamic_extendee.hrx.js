// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/013_test_dynamic_extendee.hrx

export default [
  {
    name: 'input.scss',
    data: '[baz^="blip12px"] {a: b}\n.bar {@extend [baz^="blip#{12px}"]}\n',
  },
  {
    name: 'output.css',
    data: '[baz^=blip12px], .bar {\n  a: b;\n}\n',
  },
]
