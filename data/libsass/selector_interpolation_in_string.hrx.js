export default [
  {
    name: 'input.scss',
    data: 'foo[val="bar #{"foo" + " bar"} baz"] {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo[val="bar foo bar baz"] {\n  a: b;\n}\n',
  },
]
