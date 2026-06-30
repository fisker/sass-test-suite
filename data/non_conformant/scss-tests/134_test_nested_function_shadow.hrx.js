// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/134_test_nested_function_shadow.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo() {@return 1}\n\nfoo {\n  @function foo() {@return 2}\n  a: foo();\n}\n\nbaz {b: foo()}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 2;\n}\n\nbaz {\n  b: 1;\n}\n',
  },
]
