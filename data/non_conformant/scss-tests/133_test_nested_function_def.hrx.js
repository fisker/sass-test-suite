// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/133_test_nested_function_def.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @function foo() {@return 1}\n  a: foo(); }\n\nbar {b: foo()}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 1;\n}\n\nbar {\n  b: foo();\n}\n',
  },
]
