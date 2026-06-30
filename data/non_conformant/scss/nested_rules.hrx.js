// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/nested_rules.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar {baz {a: b}}\n  bang {bip {a: b}}}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar baz {\n  a: b;\n}\nfoo bang bip {\n  a: b;\n}\n',
  },
]
