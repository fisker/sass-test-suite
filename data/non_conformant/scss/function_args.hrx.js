// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/function_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@function plus($var1, $var2) {\n  @return $var1 + $var2;\n}\n\nbar {\n  a: plus(1, 2);\n}\n',
  },
  {
    name: 'output.css',
    data: 'bar {\n  a: 3;\n}\n',
  },
]
