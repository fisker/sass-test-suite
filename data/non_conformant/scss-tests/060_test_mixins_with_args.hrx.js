// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/060_test_mixins_with_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a) {a: $a}\n\n.foo {@include foo(bar)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: bar;\n}\n',
  },
]
