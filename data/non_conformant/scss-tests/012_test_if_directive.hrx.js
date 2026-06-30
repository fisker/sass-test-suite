export default [
  {
    name: 'input.scss',
    data: '@if "foo" != "foo" {foo {a: b}}\n@else if "foo" == "foo" {bar {a: b}}\n@else if true {baz {a: b}}\n',
  },
  {
    name: 'output.css',
    data: 'bar {\n  a: b;\n}\n',
  },
]
