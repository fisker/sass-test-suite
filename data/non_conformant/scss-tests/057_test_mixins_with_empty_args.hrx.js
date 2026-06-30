// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/057_test_mixins_with_empty_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {a: b}\n\n.foo {@include foo();}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
