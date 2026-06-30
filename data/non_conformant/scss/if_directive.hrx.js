// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/if_directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@if "foo" != "foo" {foo {a: b}}\n@else {bar {a: b}}\n',
  },
  {
    name: 'output.css',
    data: 'bar {\n  a: b;\n}\n',
  },
]
