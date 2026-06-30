// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/while.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  $x : true;\n  @while $x {\n    stuff: 1;\n    more-stuff: 2;\n    even-more-stuff: 3;\n    lets-stop-now: 4;\n    $x: false;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  stuff: 1;\n  more-stuff: 2;\n  even-more-stuff: 3;\n  lets-stop-now: 4;\n}\n',
  },
]
