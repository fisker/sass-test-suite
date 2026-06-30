// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/004_test_variables.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  $var: 2;\n  $another-var: 4;\n  a: $var;\n  b: $var + $another-var;}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 2;\n  b: 6;\n}\n',
  },
]
