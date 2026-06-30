// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/multiple-operators.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: 2;\n$y: 1;\n\n@function getResult() { @return true; }\n\n.test {\n    a: $x > $y == getResult();\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  a: true;\n}\n',
  },
]
