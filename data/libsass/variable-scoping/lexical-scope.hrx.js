export default [
  {
    name: 'input.scss',
    data: '$x: -42;\n$y: -84;\ndiv {\n  $x: 42;\n  $y: 84;\n  for {\n    @for $x from 1 through 5 {\n      $y: $y + 5;\n      y: $y;\n      x: $x;\n      $x: 999;\n      x: $x;\n      $y: -9 !global;\n      $x: -9 !global;\n    }\n  }\n  x: $x;\n  y: $y;\n}',
  },
  {
    name: 'output.css',
    data: 'div for {\n  y: 89;\n  x: 1;\n  x: 999;\n  y: 94;\n  x: 2;\n  x: 999;\n  y: 99;\n  x: 3;\n  x: 999;\n  y: 104;\n  x: 4;\n  x: 999;\n  y: 109;\n  x: 5;\n  x: 999;\n}\ndiv {\n  x: 42;\n  y: 109;\n}\n',
  },
]
