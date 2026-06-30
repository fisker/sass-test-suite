// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/011_test_if_directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@if "foo" == "foo" {foo {a: b}}\n@if "foo" != "foo" {bar {a: b}}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: b;\n}\n',
  },
]
