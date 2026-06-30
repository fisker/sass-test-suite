export default [
  {
    name: 'input.scss',
    data: "@use \"sass:selector\";\n.foo {\n    a: selector.nest('.foo', '.bar > .baz');\n    b: selector.nest('.foo', '.bar ~ .baz');\n    c: selector.nest('.foo', '.bar + .baz');\n    d: selector.nest('.foo > .bar', '.baz');\n    e: selector.nest('.foo ~ .bar', '.baz');\n    f: selector.nest('.foo + .bar', '.baz');\n}\n",
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: .foo .bar > .baz;\n  b: .foo .bar ~ .baz;\n  c: .foo .bar + .baz;\n  d: .foo > .bar .baz;\n  e: .foo ~ .bar .baz;\n  f: .foo + .bar .baz;\n}\n',
  },
]
