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
