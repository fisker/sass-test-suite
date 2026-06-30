// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/065_test_mixin_empty_var_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@mixin foo($a, $b...) {\n  a: $a;\n  b: list.length($b);\n}\n\n.foo {@include foo(1)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 1;\n  b: 0;\n}\n',
  },
]
