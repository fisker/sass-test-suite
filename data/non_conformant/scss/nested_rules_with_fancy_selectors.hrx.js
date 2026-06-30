// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/nested_rules_with_fancy_selectors.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  .bar {a: b}\n  :baz {c: d}\n  bang:bop {e: f}}\n',
  },
  {
    name: 'output.css',
    data: 'foo .bar {\n  a: b;\n}\nfoo :baz {\n  c: d;\n}\nfoo bang:bop {\n  e: f;\n}\n',
  },
]
