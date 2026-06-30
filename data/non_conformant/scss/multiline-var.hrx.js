// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/multiline-var.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  $var1: 1 +\n    2;\n  $var2: true and\n    false;\n  $var3: a b\n    c;\n  a: $var1;\n//  b: $var2;\n  c: $var3; }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 3;\n  c: a b c;\n}\n',
  },
]
