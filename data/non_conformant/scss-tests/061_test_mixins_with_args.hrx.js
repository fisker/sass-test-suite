// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/061_test_mixins_with_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a, $b) {\n  a: $a;\n  b: $b; }\n\n.foo {@include foo(bar, 12px)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: bar;\n  b: 12px;\n}\n',
  },
]
